import inquirer from 'inquirer';
import chalk from 'chalk';

export default class SurveyTemplate {
  constructor(questions) {
    this.questions = questions;
    this.successMessage = 'Success';
    this.errorMessage = 'Error';
  }

  process() {
    return Promise.resolve();
  }

  exitWithSucces() {
    console.info(chalk.green(`\n${this.successMessage}\n`));
    process.exit(0);
  }

  exitWithError(err) {
    console.info(chalk.green(`\n${this.errorMessage}\n`));
    console.info(chalk.red(err ? err.message : 'Unknown error'));
    process.exit(0);
  }

  start() {
    return inquirer.prompt(this.questions)
    .then(this.process)
    .then(() => this.exitWithSucces())
    .catch(err => this.exitWithError(err));
  }
}
