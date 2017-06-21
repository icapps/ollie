import path from 'path';

// import SurveyTemplate from './surveyTemplate';
import BoilerplateDialog from '../dialogs/boilerplate_dialog';
import DevelopmentCloneDialog from '../dialogs/development_clone_dialog';
import LocalCloneDialog from '../dialogs/local_clone_dialog';
import ReplaceVariablesDialog from '../dialogs/replace_variables_dialog';

// import projectQuestions from './../questions/general_questions';
// import createRepositoryQuestions from './../questions/git_questions';

// import GitHandler from '../utils/gitHandler';
// import LocalRepository from './../utils/local_repository';

// const questions = [].concat(
//   webBoilerplateQuestions,
//   projectQuestions,
//   createRepositoryQuestions
// );

export default class WebSurvey {
  constructor() {
    this.answers = {};
  }

  start() {
    const boilerplateDialog = new BoilerplateDialog('web');
    boilerplateDialog.start()
      .then((answers) => {
        this.answers.projectName = answers.projectName;
        this.answers.boilerplateRepository = answers.boilerplate.repository;

        const localCloneDialog = new LocalCloneDialog(this.answers.boilerplateRepository, this.answers.projectName);
        return localCloneDialog.start();
      })
      .then((answers) => {
        console.log('Local clone success', 'Now let\'s replace Ollie vars');
        this.answers.localPath = answers.localPath;

        const replaceVariablesDialog = new ReplaceVariablesDialog(this.answers.projectName, this.answers.localPath);
        return replaceVariablesDialog.start();
      });
  }

  startDevelopment() {
    console.log('start development');
    const boilerplateDialog = new BoilerplateDialog('dev');

    boilerplateDialog.start()
      .then((answers) => {
        this.answers.projectName = answers.projectName;
        // this.answers.boilerplateRepository = answers.boilerplate.repository;

        const developmentCloneDialog = new DevelopmentCloneDialog(this.answers.projectName);
        return developmentCloneDialog.start();
      })
      .then((answers) => {
        console.log('Development clone success', 'Now let\'s replace Ollie vars');
        this.answers.localPath = answers.localPath;

        const replaceVariablesDialog = new ReplaceVariablesDialog(this.answers.projectName, this.answers.localPath);
        return replaceVariablesDialog.start();
      });
  }

  // process(answers) {
  //   // const localRepository = new LocalRepository(answers.localRepositoryPath, answers.projectName);
  //   // const gitHandler = new GitHandler(answers, localRepository);
  //
  //   const projectPath = path.join(answers.localRepositoryPath, answers.projectName);
  //
  //   return Promise.resolve()
  //     .then(() => localRepository.createLocalDirectory())
  //   // .then(() => gitHandler.cloneTemplate())
  //     // .then(() => OllieHelpers.getConfig(projectPath))
  //     // .then((ollieConfig) => inquirer.prompt(ollieConfig.replacementQuestions))
  //     // .then((replacementAnswers) => seekAndReplace(answers.projectName, replacementAnswers, projectPath))
  //     .then(() => gitHandler.initializeGit())
  //     .then(() => gitHandler.initialCommit())
  //     .then(() => gitHandler.createRemoteRepository())
  //     .then(() => gitHandler.pushToRemote());
  // }
}

