import _ from 'lodash';
import { projectTypes } from './../constants';

const webProject = _.find(projectTypes, { name: 'Web' });

const webBoilerplateQuestions = {
  name: 'boilerplate',
  message: 'So you are a web developer, tell me what kind of web application you would like to generate?',
  type: 'list',
  choices: _.map(webProject.boilerPlates, 'name'),
  filter: answer => _.find(webProject.boilerPlates, { name: answer }),
};


const IOSProject = _.find(projectTypes, { name: 'iOS' });

const iOSBoilerplateQuestions = {
  name: 'boilerplate',
  message: 'So you are an IOS developer, tell me what kind you are.',
  type: 'list',
  choices: _.map(IOSProject.boilerPlates, 'name'),
  filter: answer => _.find(IOSProject.boilerPlates, { name: answer }),
};


const AndroidProject = _.find(projectTypes, { name: 'Android' });

const androidBoilerplateQuestions = {
  name: 'boilerplate',
  message: 'So you are an Android developer, tell me what kind you are.',
  type: 'list',
  choices: _.map(AndroidProject.boilerPlates, 'name'),
  filter: answer => _.find(AndroidProject.boilerPlates, { name: answer }),
};


export {
  webBoilerplateQuestions,
  iOSBoilerplateQuestions,
  androidBoilerplateQuestions,
};
