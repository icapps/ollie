'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OllieHelpers = function () {
  function OllieHelpers() {
    _classCallCheck(this, OllieHelpers);
  }

  _createClass(OllieHelpers, null, [{
    key: 'getConfig',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(projectPath) {
        var configPath, config;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                configPath = _path2.default.join(projectPath, 'ollie.yml');
                _context.next = 3;
                return _fsExtra2.default.exists(configPath);

              case 3:
                if (!_context.sent) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return _fsExtra2.default.readFileSync(configPath, 'utf8');

              case 6:
                config = _context.sent;
                return _context.abrupt('return', _jsYaml2.default.safeLoad(config));

              case 8:
                return _context.abrupt('return', {});

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getConfig(_x) {
        return _ref.apply(this, arguments);
      }

      return getConfig;
    }()
  }]);

  return OllieHelpers;
}();

exports.default = OllieHelpers;
module.exports = exports['default'];
//# sourceMappingURL=ollie.util.js.map