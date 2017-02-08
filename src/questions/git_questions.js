import _ from 'lodash';
import projectTypes from './../constants';

const webProject = _.find(projectTypes, { name: 'Web' });

const createRepositoryQuestions = [
  {
    name: 'createRepository',
    message: 'Would you like us to create a new git repository for you?',
    type: 'list',
    choices: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
  },
  {
    name: 'gitService',
    message: 'Which service do you wish to use?',
    type: 'list',
    choices: _.map(webProject.providers, 'name'),
    filter: answer => _.find(webProject.providers, { name: answer }),
    when: answers => answers.createRepository,
  },
];

export { createRepositoryQuestions as default };
