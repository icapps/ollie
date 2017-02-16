'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ollie = function () {
  function Ollie(options) {
    _classCallCheck(this, Ollie);

    this.projectTypes = options.projectTypes;
    this.surveys = options.surveys;
    this.welcome = function () {
      (0, _clear2.default)();
      console.log(_figlet2.default.textSync('Ollie', 'Standard'));
      console.log(_chalk2.default.blue('Hi there!'));
      console.log(_chalk2.default.blue('Let\'s get you started with a project...'));
    };
  }

  _createClass(Ollie, [{
    key: 'openingQuestions',
    value: function openingQuestions() {
      return [{
        name: 'projectType',
        message: 'What kind of project would you like to generate?',
        type: 'list',
        choices: _lodash2.default.map(this.projectTypes, 'name')
      }];
    }
  }, {
    key: 'startSurvey',
    value: function startSurvey(answers) {
      var project = _lodash2.default.find(this.projectTypes, { name: answers.projectType });
      var Survey = this.surveys[project.survey];
      var survey = new Survey();
      survey.start();
    }
  }, {
    key: 'basic',
    value: function basic() {
      var _this = this;

      this.welcome();
      _inquirer2.default.prompt(this.openingQuestions()).then(function (answers) {
        return _this.startSurvey(answers);
      });
    }
  }]);

  return Ollie;
}();

exports.default = Ollie;