

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = seekAndReplace;

const _seekAndReplace = require('seek-and-replace');

const _seekAndReplace2 = _interopRequireDefault(_seekAndReplace);

const _lodash = require('lodash');

const _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function seekAndReplace(projectName, replacementAnswers, projectPath) {
  const namespace = 'OLLIE';
  const replacePath = projectPath;

  const keyDefinitionsFromConfig = _lodash2.default.map(replacementAnswers, (value, key) => ({
      key,
      replacement: value,
    }));

  // always use projectName as a replacement for NAME
  const keyDefinitions = _lodash2.default.merge([], keyDefinitionsFromConfig, [{
    key: 'NAME',
    replacement: projectName,
  }]);

  const replacer = new _seekAndReplace2.default(namespace, replacePath, keyDefinitions, {
    ignorePaths: ['node_modules', '.idea', '.git'],
  });

  return replacer.replace();
}
