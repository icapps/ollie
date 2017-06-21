import path from 'path';
import _ from 'lodash';
import inquirer from 'inquirer';
import Git from './../utils/git';
import Fs from './../utils/fs';
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

  start() {
    return inquirer.prompt(this.questions)
      .then((answers) => {
        const clonePath = path.join(answers.localPath, this.name);

        if (Fs.directoryExists(clonePath)) {
          throw new Error('Couldn\'t clone repository, this directory already exists:', clonePath);
        }

        return Git.clone(this.repository, clonePath)
          .then(() =>
            exec(`rm -rf ${path.join(clonePath, '.git')}`)
          )
          .then(() => ({
              localPath: clonePath,
            }));
      });
  }
}

