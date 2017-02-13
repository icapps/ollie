import _ from 'lodash';
import inquirer from 'inquirer';
import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';

export default class Ollie {
  constructor(options) {
    this.projectTypes = options.projectTypes;
    this.surveys = options.surveys;
    this.welcome = () => {
      clear();
      console.log(figlet.textSync('Ollie', 'Standard'));
      console.log(chalk.blue('Hi there!'));
      console.log(chalk.blue('Let\'s get you started with a project...'));
    };
  }

  openingQuestions() {
    return [
      {
        name: 'projectType',
        message: 'What kind of project would you like to generate?',
        type: 'list',
        choices: _.map(this.projectTypes, 'name'),
      },
    ];
  }

  startSurvey(answers) {
    const project = _.find(this.projectTypes, { name: answers.projectType });
    const Survey = this.surveys[project.survey];
    const survey = new Survey();
    survey.start();
  }

  basic() {
    this.welcome();
    inquirer.prompt(this.openingQuestions())
    .then(answers => this.startSurvey(answers));
  }
}
