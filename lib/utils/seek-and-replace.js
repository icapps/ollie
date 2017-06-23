'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = seekAndReplace;

var _seekAndReplace = require('seek-and-replace');

var _seekAndReplace2 = _interopRequireDefault(_seekAndReplace);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function seekAndReplace(projectName, replacementAnswers, projectPath) {
  var namespace = 'OLLIE';
  var replacePath = projectPath;

  var keyDefinitionsFromConfig = _lodash2.default.map(replacementAnswers, function (value, key) {
    return {
      key: key,
      replacement: value
    };
  });

  // always use projectName as a replacement for NAME
  var keyDefinitions = _lodash2.default.merge([], keyDefinitionsFromConfig, [{
    key: 'NAME',
    replacement: projectName
  }]);

  var replacer = new _seekAndReplace2.default(namespace, replacePath, keyDefinitions, {
    ignorePaths: ['node_modules', '.idea', '.git']
  });

  return replacer.replace();
}
module.exports = exports['default'];
//# sourceMappingURL=seek-and-replace.js.map