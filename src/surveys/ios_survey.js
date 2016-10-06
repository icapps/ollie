import inquirer  from 'inquirer';
import { cloneRepository } from './../utils/git';

import { projectNameQuestions } from './../questions/general_questions';
import { bitbucketCredentialQuestions }  from '../questions/bitbucket_questions';

export default class IOSSurvey {
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

        const { boilerPlate, name } = answers;
        // clone repository
        cloneRepository(boilerplate, name)
      });
  }
}
