import inquirer  from 'inquirer';
import { cloneRepository } from './../utils/git';

import { webBoilerplateQuestions } from '../questions/boilerplate_questions';
import { projectNameQuestions } from './../questions/general_questions';
import { bitbucketCredentialQuestions }  from '../questions/bitbucket_questions';

export default class WebSurvey {
  start() {

    const questions = [].concat(
      // ask for which web boilerplate
      webBoilerplateQuestions,

      // ask the project name
      projectNameQuestions,

      // ask bitbucket credentials
      bitbucketCredentialQuestions
    );

    inquirer.prompt(questions)
      .then(cloneRepository)
      .catch(() => {
            console.log(chalk.green('Error cloning :('));
      })
  }
}
