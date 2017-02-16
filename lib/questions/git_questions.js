'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('./../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webProject = _lodash2.default.find(_constants.projectTypes, { name: 'Web' });

var createRepositoryQuestions = [{
  name: 'gitService',
  message: 'Which service do you wish to use?',
  type: 'list',
  choices: _lodash2.default.map(webProject.providers, 'name'),
  filter: function filter(answer) {
    return _lodash2.default.find(webProject.providers, { name: answer });
  }
}, {
  name: 'gitServiceUsername',
  message: function message(answers) {
    return 'We noticed you didn\'t enter any ' + answers.gitService.name + ' credentials, would you mind giving me your ' + answers.gitService.name + '} username?';
  },
  type: 'string'
}, {
  name: 'gitServicePassword',
  message: 'And now you password? Don\'t worry, I won\'t tell anyone...',
  type: 'password'
}];

exports.default = createRepositoryQuestions;