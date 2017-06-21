

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _fsExtra = require('fs-extra');

const fs = _interopRequireWildcard(_fsExtra);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

const JsonHandler = (function () {
  function JsonHandler() {
    _classCallCheck(this, JsonHandler);
  }

  _createClass(JsonHandler, null, [{
    key: 'replaceJsonValues',
    value: function replaceJsonValues(object, values) {
      return Object.assign({}, object, values);
    },
  }, {
    key: 'readJson',
    value: function readJson(path) {
      return new Promise((resolve, reject) => {
        fs.readJson(path, (err, json) => {
          if (err) reject(err);
          resolve(json);
        });
      });
    },
  }, {
    key: 'writeJson',
    value: function writeJson(path, data) {
      return new Promise((resolve, reject) => {
        fs.writeJson(path, data, (err) => {
          if (err) reject(err);
          resolve();
        });
      });
    },
  }]);

  return JsonHandler;
}());

exports.default = JsonHandler;
