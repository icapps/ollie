import inquirer from 'inquirer';
import chalk from 'chalk';

import cloneRepository from './../utils/git';
import projectNameQuestions from './../questions/general_questions';
import bitbucketCredentialQuestions from './../questions/bitbucket_questions';

export default class SurveyTemplate {
    constructor(projectSpecificQuestions) {
        this.questions = [].concat(projectSpecificQuestions, projectNameQuestions, bitbucketCredentialQuestions);
        this.cloneRepository = cloneRepository;
        this.successMessage = 'Cloned';
        this.errorMessage = 'Error cloning :(';
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
        inquirer.prompt(this.questions)
            .then(this.cloneRepository)
            .then(() => this.exitWithSucces())
            .catch(err => this.exitWithError(err));
    }
}
