'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backend = require('./backend.survey');

var _backend2 = _interopRequireDefault(_backend);

var _development = require('./development.survey');

var _development2 = _interopRequireDefault(_development);

var _ios = require('./ios.survey');

var _ios2 = _interopRequireDefault(_ios);

var _android = require('./android.survey');

var _android2 = _interopRequireDefault(_android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    BackendSurvey: _backend2.default,
    DevelopmentSurvey: _development2.default,
    IOSSurvey: _ios2.default,
    AndroidSurvey: _android2.default
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map