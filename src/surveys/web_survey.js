import path from 'path';

// import SurveyTemplate from './surveyTemplate';
import BoilerplateDialog from '../dialogs/boilerplate_dialog';
import DevelopmentCloneDialog from '../dialogs/development_clone_dialog';
import LocalCloneDialog from '../dialogs/local_clone_dialog';
import ReplaceVariablesDialog from '../dialogs/replace_variables_dialog';

export default class WebSurvey {
  constructor() {
    this.answers = {};
  }

  async start() {
    const boilerplateDialog = new BoilerplateDialog('web');
    const boilerplateAnswers = await boilerplateDialog.start();

    this.answers.projectName = boilerplateAnswers.projectName;
    this.answers.boilerplateRepository = boilerplateAnswers.boilerplate.repository;

    const cloneDialog = new LocalCloneDialog(this.answers.boilerplateRepository, this.answers.projectName);
    const cloneAnswers = await cloneDialog.start();
    this.answers.localPath = cloneAnswers.localPath;

    const replaceVariablesDialog = new ReplaceVariablesDialog(this.answers.projectName, this.answers.localPath);
    return replaceVariablesDialog.start();

    // git
    const gitHandler = new GitHandler(this.answers, this.localPath);
    gitHandler.setup({ development: true });
  }
}

