import fs from 'fs-extra';
import autobind from 'autobind-decorator'
import exec from './child-process-promise';
import Spinner from './spinner';
import { createBitbucketApiService } from './../factories/apiServiceFactory';

@autobind
export default class Git {
  constructor(answers, localRepository) {
    this.answers = answers;
    this.name = answers.projectName;
    this.localRepository = localRepository;
    // this.remoteRepository = null;
    // this.apiService = createBitbucketApiService(this.answers);
  }

  async setup(options = { development: false }) {
    await this.initialize();
    await this.initialCommit();

    // if (!dev) {
    //   await this.createRemoteRepository();
    //   await this.pushToRemote();
    // }
    return Promise.resolve();
  }

  initialize() {
    return exec(`git -C ${this.localRepository} init`);
  }

  async initialCommit(message = 'initial commit') {
    await exec(`git -C ${this.localRepository} add .`);
    return exec(`git -C ${this.localRepository} commit -m '${message}'`);
  }

  // setRemote() {
  //   return exec(`git -C ${this.localRepository} remote add origin ${this.remoteRepository}`);
  // }

  // async createRemoteRepository() {
  //   const remoteRepositoryUrl = await this.apiService.createRepository();
  //   return exec(`git -C ${this.localRepository} remote add origin ${remoteRepositoryUrl}`);
  // }

  // pushToRemote() {
  //   return exec(`git -C ${this.localRepository} push origin master`);
  // }

  static clone(repository, path) {
    return exec(`git clone ${repository} ${path} && rm -rf ${path}/.git`);
  }
}

