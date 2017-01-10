import fs from 'fs-extra';
import exec from './child-process-promise';
import Spinner from './spinner';
import * as apiServiceFactory from './../factories/apiServiceFactory';

export default class GitHandler {
  constructor(answers, localRepository) {
    this.answers = answers;
    this.name = answers.name;
    this.boilerplate = answers.boilerplate;

    this.localRepository = localRepository;
    this.remoteRepository = null;
    this.apiService = apiServiceFactory[`create${this.answers.gitService.name}ApiService`](this.answers);
  }


  cloneRepository() {
    const spinner = new Spinner(`Cloning template into ${this.localRepository.path} %s`, true);
    return this.executeCloneOperation()
    .then(() => spinner.stop());
  }

  createGitRepository() {
    if (this.answers.createRepository) {
      return this.initRepository()
      .then(() => this.setRemote());
    }
    return true;
  }

  initRepository() {
    const spinner = new Spinner(`Creating new repository ${this.name} %s`, true);
    return this.apiService.createRepository()
    .then((remoteUrl) => {
      this.remoteRepository = remoteUrl;
      return spinner.stop();
    });
  }

  setRemote() {
    const spinner = new Spinner('Initialising new git repository and adding remote %s', true);
    return exec(this.getRemoteCommand())
    .then(() => spinner.stop());
  }

  initialCommit() {
    const spinner = new Spinner('Pushing initial commit %s', true);
    return exec(this.getInitialCommitCommand())
    .then(() => spinner.stop())
    .then(() => this.apiService.getRepoUrl());
  }


  /**
   * Commands
   */

  executeCloneOperation() {
    if (this.answers.templateLocation === 'LOCAL') {
      return new Promise((resolve, reject) => {
        fs.copy(this.answers.templateLocationPath, this.localRepository.path, (error) => {
          if (error) reject(error);
          resolve();
        });
      });
    }
    return exec(`git clone ${this.boilerplate.repository} ${this.localRepository.path} && rm -rf ${this.localRepository.path}/.git`);
  }

  getRemoteCommand() {
    return `git -C ${this.localRepository.path} init && git -C ${this.localRepository.path} remote add origin ${this.remoteRepository}`;
  }

  // TODO - split up into multiple statements (better error handling)
  getInitialCommitCommand() {
    return `git -C ${this.localRepository.path} add . && git -C ${this.localRepository.path} commit -m 'initial commit' && git -C ${this.localRepository.path} push --force origin master`;
  }

  /**
   * Getters
   */
  getRemoteRepository() {
    return this.remoteRepository;
  }

}
