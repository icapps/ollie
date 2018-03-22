import exec from './child-process-promise';
import RemoteRepositoryDialog from './../dialogs/remote-repository.dialog';

export default class Git {
  constructor(answers) {
    this.localRepository = answers.localPath;
    this.answers = answers;
  }

  async setup() {
    await this.initialize();
    await this.initialCommit();
    await this.setupRemote();

    return Promise.resolve();
  }

  async setupRemote() {
    await this.createRemoteRepository();
    await this.pushToRemote();
  }

  initialize() {
    return exec(`git -C "${this.localRepository}" init`);
  }

  async initialCommit(message = 'initial commit') {
    await exec(`git -C "${this.localRepository}" add .`);
    return exec(`git -C "${this.localRepository}" commit -m '${message}'`);
  }

  async createRemoteRepository() {
    // remote git repository (Bitbucket / Github)
    const remoteRepoDialog = new RemoteRepositoryDialog(this.answers.projectName);
    const remoteRepositoryUrl = await remoteRepoDialog.start();
    exec(`git -C "${this.localRepository}" remote add origin ${remoteRepositoryUrl}`);
  }

  pushToRemote() {
    return exec(`git -C "${this.localRepository}" push origin master`);
  }

  static clone(repository, path) {
    return exec(`git clone ${repository} "${path}" && rm -rf "${path}/.git"`);
  }
}

