import path from 'path';
import _ from 'lodash';
import inquirer from 'inquirer';
import OllieHelpers from './../utils/ollie.util';
import seekAndReplace from './../utils/seek-and-replace';
import exec from './../utils/child-process-promise';

export default class ReplaceVariablesDialog {
  constructor(projectName, path) {
    this.projectName = projectName;
    this.path = path;
    this.questions = [];
  }

  async start() {
    const ollieConfig = await OllieHelpers.getConfig(this.path);
    const replacementAnswers = await inquirer.prompt(ollieConfig.replacementQuestions || []);
    const result = await seekAndReplace(this.projectName, replacementAnswers, this.path);
    
    // Remove ollie.yml file from project
    await exec(`rm -f "${path.join(this.path, 'ollie.yml')}"`)
    return result;
  }
}

