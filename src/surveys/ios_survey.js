import path from 'path';
import inquirer from 'inquirer';

import SurveyTemplate from './surveyTemplate';
import { iOSBoilerplateQuestions } from '../questions/boilerplate_questions';
import projectQuestions from './../questions/general_questions';
import createRepositoryQuestions from './../questions/git_questions';

import GitHandler from '../utils/gitHandler';
import LocalRepository from './../utils/local-repository';
import seekAndReplace from './../utils/seek-and-replace';
import { getOllieBoilerplateConfig } from './../utils/ollie-utils';

const questions = [].concat(
  iOSBoilerplateQuestions,
  projectQuestions,
  createRepositoryQuestions
);

export default class IOSSurvey extends SurveyTemplate {
  constructor() {
    super(questions);
  }

  process(answers) {
    const localRepository = new LocalRepository(answers.localRepositoryPath, answers.projectName);
    const gitHandler = new GitHandler(answers, localRepository);
    const projectPath = path.join(answers.localRepositoryPath, answers.projectName);

    return Promise.resolve()
      .then(() => localRepository.createLocalDirectory())
      .then(() => gitHandler.cloneTemplate())
      .then(() => getOllieBoilerplateConfig(projectPath))
      .then(ollieConfig => inquirer.prompt(ollieConfig.replacementQuestions))
      .then(replacementAnswers => seekAndReplace(answers.projectName, replacementAnswers, projectPath))
      .then(() => gitHandler.initializeGit())
      .then(() => gitHandler.initialCommit())
      .then(() => gitHandler.createRemoteRepository())
      .then(() => gitHandler.pushToRemote());
  }
}

