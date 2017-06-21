

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _web_survey = require('./web_survey');

const _web_survey2 = _interopRequireDefault(_web_survey);

const _ios_survey = require('./ios_survey');

const _ios_survey2 = _interopRequireDefault(_ios_survey);

const _android_survey = require('./android_survey');

const _android_survey2 = _interopRequireDefault(_android_survey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { WebSurvey: _web_survey2.default, IOSSurvey: _ios_survey2.default, AndroidSurvey: _android_survey2.default };
