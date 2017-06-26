'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _constants = require('./../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var webProject = _lodash2.default.find(_constants.projectTypes, { name: 'Web' });
var iOSProject = _lodash2.default.find(_constants.projectTypes, { name: 'iOS' });
var androidProject = _lodash2.default.find(_constants.projectTypes, { name: 'Android' });

var questions = {
  web: {
    name: 'boilerplate',
    message: 'So you are a Web developer, tell me what kind of web application you would like to generate?',
    type: 'list',
    choices: _lodash2.default.map(webProject.boilerPlates, 'name'),
    filter: function filter(answer) {
      return _lodash2.default.find(webProject.boilerPlates, { name: answer });
    }
  },
  ios: {
    name: 'boilerplate',
    message: 'So you are an IOS developer, tell me what kind you are.',
    type: 'list',
    choices: _lodash2.default.map(iOSProject.boilerPlates, 'name'),
    filter: function filter(answer) {
      return _lodash2.default.find(iOSProject.boilerPlates, { name: answer });
    }
  },
  android: {
    name: 'boilerplate',
    message: 'So you are an Android developer, tell me what kind you are.',
    type: 'list',
    choices: _lodash2.default.map(androidProject.boilerPlates, 'name'),
    filter: function filter(answer) {
      return _lodash2.default.find(androidProject.boilerPlates, { name: answer });
    }
  }
};

var generalQuestions = [{
  name: 'projectName',
  message: 'What will be the name of the project?',
  type: 'string'
}];

var BoilerplateDialog = function () {
  function BoilerplateDialog(type) {
    _classCallCheck(this, BoilerplateDialog);

    this.questions = _lodash2.default.concat([], this._getQuestionsForType(questions, type.toLowerCase()), generalQuestions);
  }

  _createClass(BoilerplateDialog, [{
    key: 'start',
    value: function start() {
      return _inquirer2.default.prompt(this.questions).then(function (answers) {
        return answers;
      });
    }
  }, {
    key: '_getQuestionsForType',
    value: function _getQuestionsForType(questions, type) {
      if (type === 'dev') {
        return [];
      }

      var questionTypes = _lodash2.default.keys(questions);

      if (questionTypes.includes(type)) {
        return questions[type];
      } else {
        throw new Error('This boilerplate type doens\'t exist: ' + type + '.');
      }
    }
  }]);

  return BoilerplateDialog;
}();

exports.default = BoilerplateDialog;
module.exports = exports['default'];
//# sourceMappingURL=boilerplate.dialog.js.map