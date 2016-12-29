import _ from 'lodash';
import projectTypes from './../constants';

const webProject = _.find(projectTypes, {name: 'Web'});

const createRepositoryQuestions = [
  {
    name: 'createRepository',
    message: 'Would you like us to create a new git repository for you?',
    type: 'list',
    choices: ['Yes', 'No'],
  },
  {
    name: 'gitService',
    message: 'Which service do you wish to use?',
    type: 'list',
    choices: _.map(webProject.providers, 'name'),
    filter: answer => _.find(webProject.providers, {name: answer}),
    when: (answers) => { return answers.createRepository === 'Yes' },
  },
];

export {createRepositoryQuestions};
