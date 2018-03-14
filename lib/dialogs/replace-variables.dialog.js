'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _ollie = require('./../utils/ollie.util');

var _ollie2 = _interopRequireDefault(_ollie);

var _seekAndReplace = require('./../utils/seek-and-replace');

var _seekAndReplace2 = _interopRequireDefault(_seekAndReplace);

var _childProcessPromise = require('./../utils/child-process-promise');

var _childProcessPromise2 = _interopRequireDefault(_childProcessPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReplaceVariablesDialog = function () {
  function ReplaceVariablesDialog(projectName, path) {
    _classCallCheck(this, ReplaceVariablesDialog);

    this.projectName = projectName;
    this.path = path;
    this.questions = [];
  }

  _createClass(ReplaceVariablesDialog, [{
    key: 'start',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var ollieConfig, replacementAnswers, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ollie2.default.getConfig(this.path);

              case 2:
                ollieConfig = _context.sent;
                _context.next = 5;
                return _inquirer2.default.prompt(ollieConfig.replacementQuestions || []);

              case 5:
                replacementAnswers = _context.sent;
                _context.next = 8;
                return (0, _seekAndReplace2.default)(this.projectName, replacementAnswers, this.path);

              case 8:
                result = _context.sent;
                _context.next = 11;
                return (0, _childProcessPromise2.default)('rm -f "' + _path2.default.join(this.path, 'ollie.yml') + '"');

              case 11:
                return _context.abrupt('return', result);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _ref.apply(this, arguments);
      }

      return start;
    }()
  }]);

  return ReplaceVariablesDialog;
}();

exports.default = ReplaceVariablesDialog;
module.exports = exports['default'];
//# sourceMappingURL=replace-variables.dialog.js.map