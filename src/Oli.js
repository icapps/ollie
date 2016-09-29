const inquirer = require('inquirer');
const clear = require('clear');
const sleep = require('sleep');
const figlet = require('figlet');
const chalk = require('chalk');
const _ = require('lodash');

const projectTypes = require('./constants').projectTypes;
const questionaires = require('./questionnaires');


class Oli {
  constructor() {
  }

  basic() {
    // clear();
    this.welcome();

    const prompt = inquirer.createPromptModule();
    const questions = [
      {
        name: 'projectType',
        message: 'What kind of project would you like to generate?',
        type: 'list',
        choices: _.map(projectTypes, 'name'),
      },
    ];


    prompt(questions)
      .then((answers) => {
        const project = _.find(projectTypes, {name: answers.projectType});
        const Questionnaire = require(`./questionnaires/${project.questionnaire}`);
        new Questionnaire();
      });
  }

  welcome() {
    console.log(figlet.textSync('Oli', 'Standard'));

    console.log(chalk.blue(`Hi there!`));
    console.log(chalk.blue(`Let's get you started with a project...`));

    // wait 2 seconds
    // sleep.sleep(1);
  }
}

module.exports = Oli;
