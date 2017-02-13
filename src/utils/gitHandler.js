import fs from 'fs-extra';
import exec from './child-process-promise';
import Spinner from './spinner';
import * as apiServiceFactory from './../factories/apiServiceFactory';

export default class GitHandler {
  constructor(answers, localRepository) {
    this.answers = answers;
    this.name = answers.projectName;
    this.boilerplate = answers.boilerplate;

    this.localRepository = localRepository;
    this.remoteRepository = null;
    this.apiService = apiServiceFactory[`create${this.answers.gitService.name}ApiService`](this.answers);
  }


  setRemote() {
    // const spinner = new Spinner('Initialising new git repository and adding remote %s', true);
    return exec(`git -C ${this.localRepository.path} remote add origin ${this.remoteRepository}`)
  }

  initializeGit() {
    return exec(`git -C ${this.localRepository.path} init`);
  }

  initialCommit() {
    return Promise.resolve()
      .then(() => exec(`git -C ${this.localRepository.path} add .`))
      .then(() => exec(`git -C ${this.localRepository.path} commit -m 'initial commit'`));
  }

  pushToOrigin() {
    return exec(`git -C ${this.localRepository.path} push origin master`);
  }

  cloneTemplate() {
    if (this.answers.templateLocation === 'LOCAL') {
      return new Promise((resolve, reject) => {
        fs.copy(this.answers.templateLocationPath, this.localRepository.path, (error) => {
          if (error) reject(error);
          exec(`rm -rf ${this.localRepository.path}/.git`)
            .then(resolve)
        });
      });
    }
    return exec(`git clone ${this.boilerplate.repository} ${this.localRepository.path} && rm -rf ${this.localRepository.path}/.git`);
  }
}
