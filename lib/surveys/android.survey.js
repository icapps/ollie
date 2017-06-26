'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _base = require('../surveys/base.survey');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AndroidSurvey = function (_BaseSurvey) {
  _inherits(AndroidSurvey, _BaseSurvey);

  function AndroidSurvey() {
    _classCallCheck(this, AndroidSurvey);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (AndroidSurvey.__proto__ || Object.getPrototypeOf(AndroidSurvey)).call(this, args));

    _this.type = 'android';
    return _this;
  }

  return AndroidSurvey;
}(_base2.default);

exports.default = AndroidSurvey;
module.exports = exports['default'];
//# sourceMappingURL=android.survey.js.map