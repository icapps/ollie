

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getOllieBoilerplateConfig = getOllieBoilerplateConfig;

const _fs = require('fs');

const _fs2 = _interopRequireDefault(_fs);

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _jsYaml = require('js-yaml');

const _jsYaml2 = _interopRequireDefault(_jsYaml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOllieBoilerplateConfig(projectPath) {
  const ollieConfigFile = _fs2.default.readFileSync(_path2.default.join(projectPath, 'ollie.yml'), 'utf8');
  const ollieConfig = _jsYaml2.default.safeLoad(ollieConfigFile);
  return ollieConfig;
}
