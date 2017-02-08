import _ from 'lodash';
import projectTypes from './../constants';

const webProject = _.find(projectTypes, { name: 'Web' });

const createRepositoryQuestions = [
  {
    name: 'gitService',
    message: 'Which service do you wish to use?',
    type: 'list',
    choices: _.map(webProject.providers, 'name'),
    filter: answer => _.find(webProject.providers, { name: answer }),
  },
  {
    name: 'gitServiceUsername',
    message: answers => `We noticed you didn't enter any ${answers.gitService.name} credentials, would you mind giving me your ${answers.gitService.name}} username?`,
    type: 'string',
  },
  {
    name: 'gitServicePassword',
    message: 'And now you password? Don\'t worry, I won\'t tell anyone...',
    type: 'password',
  },
];

export { createRepositoryQuestions as default };
