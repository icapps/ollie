

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _inquirer = require('inquirer');

const _inquirer2 = _interopRequireDefault(_inquirer);

const _chalk = require('chalk');

const _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

const SurveyTemplate = (function () {
  function SurveyTemplate(questions) {
    _classCallCheck(this, SurveyTemplate);

    this.questions = questions;
    this.successMessage = 'Success';
    this.errorMessage = 'Error';
  }

  _createClass(SurveyTemplate, [{
    key: 'process',
    value: function process() {
      return Promise.resolve();
    },
  }, {
    key: 'exitWithSucces',
    value: function exitWithSucces(repoUrl) {
      console.info(_chalk2.default.green(`\n${this.successMessage}. Check out your new repo at ${repoUrl}\n`));
      process.exit(0);
    },
  }, {
    key: 'exitWithError',
    value: function exitWithError(err) {
      console.info(_chalk2.default.green(`\n${this.errorMessage}: `));
      console.info(_chalk2.default.red(err.stack));
      process.exit(0);
    },
  }, {
    key: 'start',
    value: function start() {
      const _this = this;

      return _inquirer2.default.prompt(this.questions).then(this.process).then(repoUrl => _this.exitWithSucces(repoUrl)).catch(err => _this.exitWithError(err));
    },
  }]);

  return SurveyTemplate;
}());

exports.default = SurveyTemplate;
