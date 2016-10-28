import _ from 'lodash';
import projectTypes from './../constants';

const webProject = _.find(projectTypes, { name: 'Web' });

const webBoilerplateQuestions = {
  name: 'boilerplate',
  message: 'So you are a web developer, tell me what kind of web application you would like to generate?',
  type: 'list',
  choices: _.map(webProject.boilerPlates, 'name'),
  filter: answer => _.find(webProject.boilerPlates, { name: answer }),
};

export { webBoilerplateQuestions as default };
