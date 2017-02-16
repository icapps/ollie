'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOllieBoilerplateConfig = getOllieBoilerplateConfig;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOllieBoilerplateConfig(projectPath) {
  var ollieConfigFile = _fs2.default.readFileSync(_path2.default.join(projectPath, 'ollie.yml'), 'utf8');
  var ollieConfig = _jsYaml2.default.safeLoad(ollieConfigFile);
  return ollieConfig;
}