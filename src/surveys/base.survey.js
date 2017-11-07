import path from 'path';

// dialogs
import BoilerplateDialog from '../dialogs/boilerplate.dialog';
import LocalCloneDialog from '../dialogs/local-clone.dialog';
import RemoteRepositoryDialog from '../dialogs/remote-repository.dialog';
import ReplaceVariablesDialog from '../dialogs/replace-variables.dialog';

// utils
import Git from '../utils/git.util.js';

export default class BaseSurvey {
  constructor() {
    this.answers = {};
  }

  async start() {
    const boilerplateDialog = new BoilerplateDialog(this.type);
    const boilerplateAnswers = await boilerplateDialog.start();
    this.answers.projectName = boilerplateAnswers.projectName;
    this.answers.boilerplateRepository = boilerplateAnswers.boilerplate.repository;

    const cloneDialog = new LocalCloneDialog(this.answers.boilerplateRepository, this.answers.projectName);
    const cloneAnswers = await cloneDialog.start();
    this.answers.localPath = cloneAnswers.localPath;

    const replaceVariablesDialog = new ReplaceVariablesDialog(this.answers.projectName, this.answers.localPath);
    await replaceVariablesDialog.start();
    
    // git
    const git = new Git(this.answers, this.answers.localPath);
    await git.setup();

    // // remote git repository (Bitbucket / Github)
    // const remoteRepoDialog = new RemoteRepositoryDialog(this.answers.projectName);
    // const remoteRepoAnswers = await remoteRepoDialog.start();


    return Promise.resolve(this.answers);
  }
}
