import _ from 'lodash';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { providers } from './../constants';
import serviceFactory from './../factories/api-service.factory';
import * as ollieConfig from './../utils/config.util';

export default class RemoteRepositoryDialog {
  constructor(projectName) {
    this.projectName = projectName;

    this.gitServiceQuestion = [
      {
        name: 'gitService',
        message: 'Which service do you wish to use?',
        type: 'list',
        choices: _.map(providers, 'name'),
        filter: answer => _.find(providers, { name: answer }),
      },
    ];

    this.useExistingCredentialsQuestion = gitServicename => ([
      {
        name: 'useExistingCredentials',
        message: `Do you wish to use your existing credentials for ${gitServicename}?`,
        type: 'confirm',
      },
    ]);

    this.credentialQuestions = gitServicename => ([
      {
        name: 'gitServiceUsername',
        message: `We noticed you didn't enter any ${gitServicename} credentials,
        would you mind giving me your ${gitServicename} username?`,
        type: 'string',
      },
      {
        name: 'gitServicePassword',
        message: 'And now you password? Don\'t worry, I won\'t tell anyone...',
        type: 'password',
      },
      {
        name: 'saveCredentials',
        message: 'Do you wish us to save your credentials so we don\'t have to bother you next time?',
        type: 'confirm',
      },
    ]);
  }

  async start() {
    let credentials;
    const config = await ollieConfig.get();

    const { gitService } = await inquirer.prompt(this.gitServiceQuestion);
    gitService.name = gitService.name.toLowerCase();

    if (config[gitService.name].username) {
      const { useExistingCredentials } = await inquirer.prompt(this.useExistingCredentialsQuestion(gitService.name));
      if (useExistingCredentials) credentials = config[gitService.name];
    }

    if (!credentials) {
      const answers = await inquirer.prompt(this.credentialQuestions(gitService.name));
      if (answers.saveCredentials) {
        credentials = {
          username: answers.gitServiceUsername,
          password: answers.gitServicePassword,
        };

        config[gitService.name] = credentials;
        await ollieConfig.save(config);
        console.info(chalk.green(`Configuration written to ${process.env.HOME}/.ollieconfig`));
      }
    }

    const apiServiceOptions = {
      gitService,
      projectName: this.projectName,
      gitServiceUsername: credentials.username,
      gitServicePassword: credentials.password,
    };

    this.apiService = serviceFactory[apiServiceOptions.gitService.name](apiServiceOptions);
    return this.apiService.createRepository();
  }
}

