'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web.survey');

var _web2 = _interopRequireDefault(_web);

var _development = require('./development.survey');

var _development2 = _interopRequireDefault(_development);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    WebSurvey: _web2.default,
    DevelopmentSurvey: _development2.default
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map