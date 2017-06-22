import path from 'path';

// dialogs
import BoilerplateDialog from '../dialogs/boilerplate_dialog';
import DevelopmentCloneDialog from '../dialogs/development_clone_dialog';
import LocalCloneDialog from '../dialogs/local_clone_dialog';
import ReplaceVariablesDialog from '../dialogs/replace_variables_dialog';

//utils
import Git from '../utils/git.js';

export default class DevelopmentSurvey {
  constructor() {
    this.answers = {};
  }

  async start() {
    const boilerplateDialog = new BoilerplateDialog('dev');
    const boilerplateAnswers = await boilerplateDialog.start();
    this.answers.projectName = boilerplateAnswers.projectName;

    const cloneDialog = new DevelopmentCloneDialog(this.answers.projectName);
    const cloneAnswers = await cloneDialog.start();
    this.answers.localPath = cloneAnswers.localPath;

    // git
    const git = new Git(this.answers, this.answers.localPath);
    await git.setup({ development: true });

    const replaceVariablesDialog = new ReplaceVariablesDialog(this.answers.projectName, this.answers.localPath);
    await replaceVariablesDialog.start();

    return Promise.resolve(this.answers);
  }
}

