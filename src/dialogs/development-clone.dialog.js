import path from 'path';
import _ from 'lodash';
import inquirer from 'inquirer';
import exec from './../utils/child-process-promise';

export default class DevelopmentCloneDialog {
  constructor(projectName) {
    this.projectName = projectName;

    this.questions = [
      {
        name: 'templateLocationPath',
        message: 'Please provide the path to your own project template',
        type: 'string',
      }, {
        name: 'localPath',
        message: 'Where would you like to store your new project?',
        type: 'string',
        default: process.cwd(),
      }
    ];
  }

  async start() {
    const answers = await inquirer.prompt(this.questions)
    const localPath = path.join(answers.localPath, this.projectName);

    // copy template into new path
    await exec(`cp -r "${answers.templateLocationPath}" "${localPath}"`)

    // remove .git/ directory
    await exec(`rm -rf "${path.join(localPath, '.git')}"`)

    return { localPath };
  }
}


