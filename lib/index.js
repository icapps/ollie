'use strict';

var _Ollie = require('./Ollie');

var _Ollie2 = _interopRequireDefault(_Ollie);

var _constants = require('./constants');

var _surveys = require('./surveys');

var _surveys2 = _interopRequireDefault(_surveys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ollie = new _Ollie2.default({ projectTypes: _constants.projectTypes, surveys: _surveys2.default });
ollie.basic();