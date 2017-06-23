#!/usr/bin/env node
'use strict';

require('babel-polyfill');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _ollie = require('./ollie');

var _ollie2 = _interopRequireDefault(_ollie);

var _constants = require('./constants');

var _surveys = require('./surveys');

var _surveys2 = _interopRequireDefault(_surveys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1').option('-d, --dev', 'Run in development mode').parse(process.argv);

var ollie = new _ollie2.default({
  projectTypes: _constants.projectTypes,
  surveys: _surveys2.default,
  development: _commander2.default.dev
});

ollie.start();
//# sourceMappingURL=index.js.map