import path from 'path';
import _ from 'lodash';
import inquirer from 'inquirer';
import exec from './../utils/child-process-promise';


export default class DevelopmentCloneDialog {
  constructor(projectName) {
    this.projectName = projectName;

    this.questions = {
      name: 'templateLocationPath',
      message: 'Please provide the path to your own project template',
      type: 'string',
    };
  }

  start() {
    return inquirer.prompt(this.questions)
      .then((answers) => {
        const localPath = this.projectName;

        return exec(`cp -r ${answers.templateLocationPath} ${localPath}`)
          .then(() =>
            exec(`rm -rf ${path.join(localPath, '.git')}`)
          )
          .then(() => ({ localPath }));
      });
  }
}
