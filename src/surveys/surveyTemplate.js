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

  exitWithSucces(repoUrl) {
    console.info(chalk.green(`\n${this.successMessage}. Check out your new repo at ${repoUrl}\n`));
    process.exit(0);
  }

  exitWithError(err) {
    console.info(chalk.green(`\n${this.errorMessage}: `));
    console.info(chalk.red(err.stack));
    process.exit(0);
  }

  start() {
    return inquirer.prompt(this.questions)
      .then(this.process)
      .then(repoUrl => this.exitWithSucces(repoUrl))
      .catch(err => this.exitWithError(err));
  }
}
