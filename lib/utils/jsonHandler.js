'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var fs = _interopRequireWildcard(_fsExtra);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsonHandler = function () {
  function JsonHandler() {
    _classCallCheck(this, JsonHandler);
  }

  _createClass(JsonHandler, null, [{
    key: 'replaceJsonValues',
    value: function replaceJsonValues(object, values) {
      return Object.assign({}, object, values);
    }
  }, {
    key: 'readJson',
    value: function readJson(path) {
      return new Promise(function (resolve, reject) {
        fs.readJson(path, function (err, json) {
          if (err) reject(err);
          resolve(json);
        });
      });
    }
  }, {
    key: 'writeJson',
    value: function writeJson(path, data) {
      return new Promise(function (resolve, reject) {
        fs.writeJson(path, data, function (err) {
          if (err) reject(err);
          resolve();
        });
      });
    }
  }]);

  return JsonHandler;
}();

exports.default = JsonHandler;
module.exports = exports['default'];
//# sourceMappingURL=jsonHandler.js.map