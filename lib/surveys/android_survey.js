

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _figlet = require('figlet');

const _figlet2 = _interopRequireDefault(_figlet);

const _surveyTemplate = require('./surveyTemplate');

const _surveyTemplate2 = _interopRequireDefault(_surveyTemplate);

const _boilerplate_questions = require('../questions/boilerplate_questions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const AndroidSurvey = (function (_SurveyTemplate) {
  _inherits(AndroidSurvey, _SurveyTemplate);

  function AndroidSurvey() {
    _classCallCheck(this, AndroidSurvey);

    return _possibleConstructorReturn(this, (AndroidSurvey.__proto__ || Object.getPrototypeOf(AndroidSurvey)).call(this, _boilerplate_questions.androidBoilerplateQuestions));
  }

  _createClass(AndroidSurvey, [{
    key: 'process',
    value: function process(answers) {
      console.log('Android not yet implemented');
      throw new Error('(;*△*;)');
    },
  }]);

  return AndroidSurvey;
}(_surveyTemplate2.default));

exports.default = AndroidSurvey;
