

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _inquirer = require('inquirer');

const _inquirer2 = _interopRequireDefault(_inquirer);

const _surveyTemplate = require('./surveyTemplate');

const _surveyTemplate2 = _interopRequireDefault(_surveyTemplate);

const _boilerplate_questions = require('../questions/boilerplate_questions');

const _general_questions = require('./../questions/general_questions');

const _general_questions2 = _interopRequireDefault(_general_questions);

const _git_questions = require('./../questions/git_questions');

const _git_questions2 = _interopRequireDefault(_git_questions);

const _gitHandler = require('../utils/gitHandler');

const _gitHandler2 = _interopRequireDefault(_gitHandler);

const _localRepository = require('./../utils/localRepository');

const _localRepository2 = _interopRequireDefault(_localRepository);

const _seekAndReplace = require('./../utils/seek-and-replace');

const _seekAndReplace2 = _interopRequireDefault(_seekAndReplace);

const _ollieUtils = require('./../utils/ollie-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const questions = [].concat(_boilerplate_questions.iOSBoilerplateQuestions, _general_questions2.default, _git_questions2.default);

const IOSSurvey = (function (_SurveyTemplate) {
  _inherits(IOSSurvey, _SurveyTemplate);

  function IOSSurvey() {
    _classCallCheck(this, IOSSurvey);

    return _possibleConstructorReturn(this, (IOSSurvey.__proto__ || Object.getPrototypeOf(IOSSurvey)).call(this, questions));
  }

  _createClass(IOSSurvey, [{
    key: 'process',
    value: function process(answers) {
      const localRepository = new _localRepository2.default(answers.localRepositoryPath, answers.projectName);
      const gitHandler = new _gitHandler2.default(answers, localRepository);
      const projectPath = _path2.default.join(answers.localRepositoryPath, answers.projectName);

      return Promise.resolve().then(() => localRepository.createLocalDirectory()).then(() => gitHandler.cloneTemplate()).then(() => (0, _ollieUtils.getOllieBoilerplateConfig)(projectPath)).then(ollieConfig => _inquirer2.default.prompt(ollieConfig.replacementQuestions)).then(replacementAnswers => (0, _seekAndReplace2.default)(answers.projectName, replacementAnswers, projectPath)).then(() => gitHandler.initializeGit()).then(() => gitHandler.initialCommit()).then(() => gitHandler.createRemoteRepository()).then(() => gitHandler.pushToRemote());
    },
  }]);

  return IOSSurvey;
}(_surveyTemplate2.default));

exports.default = IOSSurvey;
