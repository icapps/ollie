

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.androidBoilerplateQuestions = exports.iOSBoilerplateQuestions = exports.webBoilerplateQuestions = undefined;

const _lodash = require('lodash');

const _lodash2 = _interopRequireDefault(_lodash);

const _constants = require('./../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const webProject = _lodash2.default.find(_constants.projectTypes, { name: 'Web' });

const webBoilerplateQuestions = {
  name: 'boilerplate',
  message: 'So you are a web developer, tell me what kind of web application you would like to generate?',
  type: 'list',
  choices: _lodash2.default.map(webProject.boilerPlates, 'name'),
  filter: function filter(answer) {
    return _lodash2.default.find(webProject.boilerPlates, { name: answer });
  },
};

const IOSProject = _lodash2.default.find(_constants.projectTypes, { name: 'iOS' });

const iOSBoilerplateQuestions = {
  name: 'boilerplate',
  message: 'So you are an IOS developer, tell me what kind you are.',
  type: 'list',
  choices: _lodash2.default.map(IOSProject.boilerPlates, 'name'),
  filter: function filter(answer) {
    return _lodash2.default.find(IOSProject.boilerPlates, { name: answer });
  },
};

const AndroidProject = _lodash2.default.find(_constants.projectTypes, { name: 'Android' });

const androidBoilerplateQuestions = {
  name: 'boilerplate',
  message: 'So you are an Android developer, tell me what kind you are.',
  type: 'list',
  choices: _lodash2.default.map(AndroidProject.boilerPlates, 'name'),
  filter: function filter(answer) {
    return _lodash2.default.find(AndroidProject.boilerPlates, { name: answer });
  },
};

exports.webBoilerplateQuestions = webBoilerplateQuestions;
exports.iOSBoilerplateQuestions = iOSBoilerplateQuestions;
exports.androidBoilerplateQuestions = androidBoilerplateQuestions;
