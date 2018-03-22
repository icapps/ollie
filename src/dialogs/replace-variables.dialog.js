import path from 'path';
import inquirer from 'inquirer';
import OllieHelpers from './../utils/ollie.util';
import seekAndReplace from './../utils/seek-and-replace';
import exec from './../utils/child-process-promise';

export default class ReplaceVariablesDialog {
  constructor(projectName, pathName) {
    this.projectName = projectName;
    this.pathName = pathName;
    this.questions = [];
  }

  async start() {
    const ollieConfig = await OllieHelpers.getConfig(this.pathName);
    const replacementAnswers = await inquirer.prompt(ollieConfig.replacementQuestions || []);
    const result = await seekAndReplace(this.projectName, replacementAnswers, this.pathName);

    // Remove ollie.yml file from project
    await exec(`rm -f "${path.join(this.pathName, 'ollie.yml')}"`);
    return result;
  }
}

