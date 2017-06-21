import path from 'path';
import _ from 'lodash';
import inquirer from 'inquirer';
import OllieHelpers from './../utils/ollie-utils';
import seekAndReplace from './../utils/seek-and-replace';

export default class ReplaceVariablesDialog {
  constructor(projectName, path) {
    this.projectName = projectName;
    this.path = path;
    this.questions = [];
  }

  start() {
    return Promise.resolve()
      .then(() => OllieHelpers.getConfig(this.path))
      .then(ollieConfig => inquirer.prompt(ollieConfig.replacementQuestions))
      .then((replacementAnswers) => {
        console.log('@@@@@@@@@@@@@@@@@@@@@');
        console.log('replacementAnswers', replacementAnswers);
        console.log('@@@@@@@@@@@@@@@@@@@@@');
        return seekAndReplace(this.projectName, replacementAnswers, this.path);
      });
  }
}

