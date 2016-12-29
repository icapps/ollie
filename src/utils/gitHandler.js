import exec from './child-process-promise';
import Spinner from './spinner';
import {createRepository} from './../services/apiService';


export default class GitHandler {
  constructor(answers, localRepository) {
    // TODO: ES6 Syntax
    this.answers = answers;
    this.name = answers.name;
    this.boilerplate = answers.boilerplate;

    this.localRepository = localRepository;
    this.remoteRepository = null;
  }


  cloneRepository() {
    const spinner = new Spinner(`Cloning ${this.boilerplate.name} into ${this.localRepository.path} %s`, true);
    return exec(this.getGitCloneCommand())
      .then(() => spinner.stop());
  }

  createGitRepository() {
    if (this.answers.createRepository === 'Yes') {
      return this.initRepository()
        .then(() => this.setRemote())
        .then(() => this.initialCommit());
    }
    return true;
  }

  initRepository() {
    const spinner = new Spinner(`Creating new repository ${this.name} %cs`, true);
    return createRepository(this.answers)
      .then((remoteUrl) => {
        this.remoteRepository = remoteUrl;
        return spinner.stop();
      });
  }

  setRemote() {
    const spinner = new Spinner(`Initialising new git repository and adding remote %s`, true);
    return exec(this.getRemoteCommand())
      .then(() => spinner.stop());
  }

  initialCommit() {
    const spinner = new Spinner(`Pushing initial commit %s`, true);
    return exec(this.getInitialCommitCommand())
      .then(() => spinner.stop());
  }


  /**
   * Commands
   */

  getGitCloneCommand() {
    return `git clone ${this.boilerplate.repository} ${this.localRepository.path} && rm -rf ${this.localRepository.path}/.git`;
  }

  getRemoteCommand() {
    return `git -C ${this.localRepository.path} init && git -C ${this.localRepository.path} remote add origin ${this.remoteRepository}`;
  }

  // TODO - split up into multiple statements (better error handling)
  getInitialCommitCommand() {
    return `git -C ${this.localRepository.path} add . && git -C ${this.localRepository.path} commit -m 'initial commit' && git -C ${this.localRepository.path} push --force origin master`;
  }

}
