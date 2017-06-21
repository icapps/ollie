

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _lodash = require('lodash');

const _lodash2 = _interopRequireDefault(_lodash);

const _inquirer = require('inquirer');

const _inquirer2 = _interopRequireDefault(_inquirer);

const _clear = require('clear');

const _clear2 = _interopRequireDefault(_clear);

const _figlet = require('figlet');

const _figlet2 = _interopRequireDefault(_figlet);

const _chalk = require('chalk');

const _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

const Ollie = (function () {
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
        choices: _lodash2.default.map(this.projectTypes, 'name'),
      }];
    },
  }, {
    key: 'startSurvey',
    value: function startSurvey(answers) {
      const project = _lodash2.default.find(this.projectTypes, { name: answers.projectType });
      const Survey = this.surveys[project.survey];
      const survey = new Survey();
      survey.start();
    },
  }, {
    key: 'basic',
    value: function basic() {
      const _this = this;

      this.welcome();
      _inquirer2.default.prompt(this.openingQuestions()).then(answers => _this.startSurvey(answers));
    },
  }]);

  return Ollie;
}());

exports.default = Ollie;
