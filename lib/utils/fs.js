'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fs = function () {
  function Fs() {
    _classCallCheck(this, Fs);
  }

  _createClass(Fs, null, [{
    key: 'directoryExists',
    value: function directoryExists(path) {
      try {
        return _fs2.default.statSync(path).isDirectory();
      } catch (e) {
        if (e.code === 'ENOENT') {
          return false;
        } else {
          throw e;
        }
      }
    }
  }]);

  return Fs;
}();

exports.default = Fs;
module.exports = exports['default'];
//# sourceMappingURL=fs.js.map