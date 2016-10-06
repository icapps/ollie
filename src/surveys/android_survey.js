import inquirer  from 'inquirer';
import { cloneRepository } from './../utils/git';

import { projectNameQuestions } from './../questions/general_questions';
import { bitbucketCredentialQuestions }  from './../questions/bitbucket_questions';

export default class AndroidSurvey {
  start() {
    const questions = [].concat(
      // ask the project name
      projectNameQuestions,

      // ask bitbucket credentials
      bitbucketCredentialQuestions
    );

    inquirer.prompt(questions)
      .then((answers) => {
        console.log(answers);

        // clone repository
        cloneRepository(answers.boilerplate, answers.name);
      });
  }
}
