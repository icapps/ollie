import _ from 'lodash';
import inquirer from 'inquirer';
import { projectTypes } from './../constants';

const backendProject = _.find(projectTypes, { name: 'Backend' });
const frontendProject = _.find(projectTypes, { name: 'Frontend' });
const reactNativeProject = _.find(projectTypes, { name: 'React Native' });
const iOSProject = _.find(projectTypes, { name: 'iOS' });
const androidProject = _.find(projectTypes, { name: 'Android' });

const questions = {
  backend: {
    name: 'boilerplate',
    message: 'So you are a backend dev, what kind are you today?',
    type: 'list',
    choices: _.map(backendProject.boilerPlates, 'name'),
    filter: answer => _.find(backendProject.boilerPlates, { name: answer }),
  },
  frontend: {
    name: 'boilerplate',
    message: 'So you are a frontend developer, tell me what kind of web application you would like to generate?',
    type: 'list',
    choices: _.map(frontendProject.boilerPlates, 'name'),
    filter: answer => _.find(frontendProject.boilerPlates, { name: answer }),
  },
  reactnative: {
    name: 'boilerplate',
    message: 'So you are a React Native developer, tell me what kind of React Native application you would like to generate?',
    type: 'list',
    choices: _.map(reactNativeProject.boilerPlates, 'name'),
    filter: answer => _.find(reactNativeProject.boilerPlates, { name: answer }),
  },
  ios: {
    name: 'boilerplate',
    message: 'So you are an IOS developer, tell me what kind you are.',
    type: 'list',
    choices: _.map(iOSProject.boilerPlates, 'name'),
    filter: answer => _.find(IOSProject.boilerPlates, { name: answer }),
  },
  android: {
    name: 'boilerplate',
    message: 'So you are an Android developer, tell me what kind you are.',
    type: 'list',
    choices: _.map(androidProject.boilerPlates, 'name'),
    filter: answer => _.find(AndroidProject.boilerPlates, { name: answer }),
  },
};

const generalQuestions = [
  {
    name: 'projectName',
    message: 'What will be the name of the project?',
    type: 'string',
  },
];

export default class BoilerplateDialog {
  constructor(type) {
    this.questions = _.concat(
      [],
      this._getQuestionsForType(questions, type.toLowerCase()),
      generalQuestions
    );
  }

  start() {
    return inquirer.prompt(this.questions)
      .then(answers => answers);
  }

  _getQuestionsForType(questions, type) {
    if (type === 'dev') {
      return [];
    }

    const questionTypes = _.keys(questions);

    if (questionTypes.includes(type)) {
      return questions[type];
    } else {
      throw new Error(`This boilerplate type doens't exist: ${type}.`);
    }
  }
}

