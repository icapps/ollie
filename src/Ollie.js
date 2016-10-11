import _ from 'lodash';
import inquirer from 'inquirer';
import clear from 'clear';
// import sleep from 'sleep';
import figlet from 'figlet';
import chalk from 'chalk';

import { projectTypes } from './constants';
import surveys from './surveys';


export default class Ollie {
  static welcome() {
    console.log(figlet.textSync('Ollie', 'Standard'));
    console.log(chalk.blue('Hi there!'));
    console.log(chalk.blue('Let\'s get you started with a project...'));

    // wait 2 seconds
    // sleep.sleep(1);
  }

  basic() {
    clear();
    Ollie.welcome();

    const questions = [
      {
        name: 'projectType',
        message: 'What kind of project would you like to generate?',
        type: 'list',
        choices: _.map(projectTypes, 'name'),
      },
    ];


    inquirer.prompt(questions)
      .then((answers) => {
        const project = _.find(projectTypes, { name: answers.projectType });
        const Survey = surveys[project.survey];
        const survey = new Survey();
        survey.start();
      });
  }
}
