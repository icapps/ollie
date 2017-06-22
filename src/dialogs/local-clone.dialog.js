import path from 'path';
import _ from 'lodash';
import inquirer from 'inquirer';
import Git from './../utils/git.util';
import fs from 'fs-extra';
import exec from './../utils/child-process-promise';

export default class LocalCloneDialog {
  constructor(repository, name) {
    this.name = name;
    this.repository = repository;

    this.questions = {
      name: 'localPath',
      message: 'Where would you like to store your new project?',
      type: 'string',
      default: process.cwd(),
    };
  }

  async start() {
    const answers = await inquirer.prompt(this.questions)
    const clonePath = path.join(answers.localPath, this.name);

    if (await fs.pathExistsSync(clonePath)) {
      throw new Error('Couldn\'t clone repository, this path already exists:', clonePath);
    }

    // clone repository into clone path
    await Git.clone(this.repository, clonePath)

    // remove .git directory
    await exec(`rm -rf ${path.join(clonePath, '.git')}`)

    return {
      localPath: clonePath,
    };
  }
}

