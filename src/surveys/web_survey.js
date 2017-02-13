import inquirer from 'inquirer';
import SeekAndReplace from 'seek-and-replace';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

import SurveyTemplate from './surveyTemplate';
import webBoilerplateQuestions from '../questions/boilerplate_questions';
import projectNameQuestions from './../questions/general_questions';
import createRepositoryQuestions from './../questions/git_questions';

import GitHandler from '../utils/gitHandler';
import LocalRepository from './../utils/localRepository';
// import DocumentationHandler from '../utils/documentationHandler';

const questions = [].concat(
  webBoilerplateQuestions,
  projectNameQuestions,
  createRepositoryQuestions
);

export default class WebSurvey extends SurveyTemplate {
  constructor() {
    super(questions);
  }

  process(answers) {
    const localRepository = new LocalRepository(answers.localRepositoryPath, answers.projectName);
    const gitHandler = new GitHandler(answers, localRepository);

    return Promise.resolve()
      .then(() => localRepository.createLocalDirectory() )
      .then(() => gitHandler.cloneTemplate() )
      .then(() => {
        const ollieConfig = yaml.safeLoad(fs.readFileSync(path.join(answers.localRepositoryPath, answers.projectName, 'ollie-config.yml'), 'utf8'));
        return inquirer.prompt(ollieConfig.replacementQuestions)
      })
      .then((replacementAnswers) => {
        const namespace = 'OLLIE';
        const replacePath = path.join(answers.localRepositoryPath, answers.projectName);

        const keyDefinitions = _.map(replacementAnswers, function (value, key) {
          return {
            key,
            replacement: value,
          }
        });

        const replacer = new SeekAndReplace(namespace, replacePath, keyDefinitions, {
          ignorePaths: ['node_modules', '.idea/**/*', '.git/**/*']
        });

        return replacer.replace();
      })
      .then(() => gitHandler.initializeGit() )
      .then(() => gitHandler.initialCommit());
  }
}

