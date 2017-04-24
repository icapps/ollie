import fs from 'fs-extra';
// import exec from './child-process-promise';
import Spinner from './spinner';
import * as apiServiceFactory from './../factories/apiServiceFactory';

export default class Git {
  constructor(answers, localRepository) {
    this.answers = answers;
    this.name = answers.projectName;
    this.boilerplate = answers.boilerplate;

    this.localRepository = localRepository;
    this.remoteRepository = null;
    this.apiService = apiServiceFactory[`create${this.answers.gitService.name}ApiService`](this.answers);
  }

  setRemote() {
    return exec(`git -C ${this.localRepository.path} remote add origin ${this.remoteRepository}`)
  }

  initialize() {
    return exec(`git -C ${this.localRepository.path} init`);
  }

  initialCommit() {
    return Promise.resolve()
      .then(() => exec(`git -C ${this.localRepository.path} add .`))
      .then(() => exec(`git -C ${this.localRepository.path} commit -m 'initial commit'`));
  }

  createRemoteRepository() {
    return this.apiService.createRepository()
      .then((remoteRepositoryUrl) => {
        return exec(`git -C ${this.localRepository.path} remote add origin ${remoteRepositoryUrl}`)
      });
  }

  pushToRemote() {
    return exec(`git -C ${this.localRepository.path} push origin master`);
  }

  static clone(repository, path) {
    return exec(`git clone ${repository} ${path} && rm -rf ${path}/.git`);
  }
}
