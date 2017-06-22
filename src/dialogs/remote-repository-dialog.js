import path from 'path';
import _ from 'lodash';
import inquirer from 'inquirer';
import Git from './../utils/git';
import { providers  } from './../constants';
import { createBitbucketApiService } from './../factories/apiServiceFactory';

export default class RemoteRepositoryDialog {
  constructor(projectName) {
    this.projectName = projectName;

    this.questions = [
      {
        name: 'gitService',
        message: 'Which service do you wish to use?',
        type: 'list',
        choices: _.map(providers, 'name'),
        filter: answer => _.find(providers, { name: answer }),
      },
      {
        name: 'gitServiceUsername',
        message: answers => `We noticed you didn't enter any ${answers.gitService.name} credentials, would you mind giving me your ${answers.gitService.name} username?`,
        type: 'string',
      },
      {
        name: 'gitServicePassword',
        message: 'And now you password? Don\'t worry, I won\'t tell anyone...',
        type: 'password',
      },
    ]
  }

  async start() {
    const answers = await inquirer.prompt(this.questions)

    const apiServiceOptions = {
      gitService: answers.gitService,
      projectName: this.projectName,
      gitServiceUsername: answers.gitServiceUsername,
      gitServicePassword: answers.gitServicePassword
    };

    this.apiService = createBitbucketApiService(apiServiceOptions);
    try {
      const remoteRepositoryUrl = await this.apiService.createRepository();
      console.log('@@@@@@@@@@@@@@@@@@@@@');
      console.log('remoteRepositoryUrl', remoteRepositoryUrl);
      console.log('@@@@@@@@@@@@@@@@@@@@@');
    } catch (e) {
      /* handle error */
      console.log('@@@@@@@@@@@@@@@@@@@@@');
      console.log('e', e);
      console.log('@@@@@@@@@@@@@@@@@@@@@');
    }
  }
}

