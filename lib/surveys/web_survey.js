'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _surveyTemplate = require('./surveyTemplate');

var _surveyTemplate2 = _interopRequireDefault(_surveyTemplate);

var _boilerplate_questions = require('../questions/boilerplate_questions');

var _general_questions = require('./../questions/general_questions');

var _general_questions2 = _interopRequireDefault(_general_questions);

var _git_questions = require('./../questions/git_questions');

var _git_questions2 = _interopRequireDefault(_git_questions);

var _gitHandler = require('../utils/gitHandler');

var _gitHandler2 = _interopRequireDefault(_gitHandler);

var _localRepository = require('./../utils/localRepository');

var _localRepository2 = _interopRequireDefault(_localRepository);

var _seekAndReplace = require('./../utils/seek-and-replace');

var _seekAndReplace2 = _interopRequireDefault(_seekAndReplace);

var _ollieUtils = require('./../utils/ollie-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var questions = [].concat(_boilerplate_questions.webBoilerplateQuestions, _general_questions2.default, _git_questions2.default);

var WebSurvey = function (_SurveyTemplate) {
  _inherits(WebSurvey, _SurveyTemplate);

  function WebSurvey() {
    _classCallCheck(this, WebSurvey);

    return _possibleConstructorReturn(this, (WebSurvey.__proto__ || Object.getPrototypeOf(WebSurvey)).call(this, questions));
  }

  _createClass(WebSurvey, [{
    key: 'process',
    value: function process(answers) {
      var localRepository = new _localRepository2.default(answers.localRepositoryPath, answers.projectName);
      var gitHandler = new _gitHandler2.default(answers, localRepository);
      var projectPath = _path2.default.join(answers.localRepositoryPath, answers.projectName);

      return Promise.resolve().then(function () {
        return localRepository.createLocalDirectory();
      }).then(function () {
        return gitHandler.cloneTemplate();
      }).then(function () {
        return (0, _ollieUtils.getOllieBoilerplateConfig)(projectPath);
      }).then(function (ollieConfig) {
        return _inquirer2.default.prompt(ollieConfig.replacementQuestions);
      }).then(function (replacementAnswers) {
        return (0, _seekAndReplace2.default)(answers.projectName, replacementAnswers, projectPath);
      }).then(function () {
        return gitHandler.initializeGit();
      }).then(function () {
        return gitHandler.initialCommit();
      }).then(function () {
        return gitHandler.createRemoteRepository();
      }).then(function () {
        return gitHandler.pushToRemote();
      });
    }
  }]);

  return WebSurvey;
}(_surveyTemplate2.default);

exports.default = WebSurvey;