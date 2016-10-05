import _  from 'lodash';
import inquirer  from 'inquirer';
import chalk  from 'chalk';
import { cloneRepository } from './../utils/git';
import { projectTypes }  from './../constants';
import { bitbucketCredentials }  from './../questions/bitbucket';

const webProject = _.find(projectTypes, { name: 'Web' });

export default class WebSurvey {
  constructor() {
    this.projectTypes = _.map(webProject.boilerPlates, 'name');
  }

  ask() {
    const questions = [
      {
        name: 'boilerplate',
        message: 'So you are a web developer, tell me what kind of web application you would like to generate?',
        type: 'list',
        choices: this.projectTypes,
        filter: (answer) => _.find(webProject.boilerPlates, { name: answer }),
      },
      {
        name: 'name',
        message: 'What will be the name of the project?',
        type: 'string',
      },
    ];

    const allQuestions = [].concat(questions, bitbucketCredentials);

    inquirer.prompt(questions)
      .then((answers) => {
        console.log(answers);

        // clone repository
        cloneRepository(answers.boilerplate, answers.name);
      });
  }
}
