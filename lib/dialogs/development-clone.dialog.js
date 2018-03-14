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

var _childProcessPromise = require('./../utils/child-process-promise');

var _childProcessPromise2 = _interopRequireDefault(_childProcessPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DevelopmentCloneDialog = function () {
  function DevelopmentCloneDialog(projectName) {
    _classCallCheck(this, DevelopmentCloneDialog);

    this.projectName = projectName;

    this.questions = [{
      name: 'templateLocationPath',
      message: 'Please provide the path to your own project template',
      type: 'string'
    }, {
      name: 'localPath',
      message: 'Where would you like to store your new project?',
      type: 'string',
      default: process.cwd()
    }];
  }

  _createClass(DevelopmentCloneDialog, [{
    key: 'start',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var answers, localPath;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _inquirer2.default.prompt(this.questions);

              case 2:
                answers = _context.sent;
                localPath = _path2.default.join(answers.localPath, this.projectName);

                // copy template into new path

                _context.next = 6;
                return (0, _childProcessPromise2.default)('cp -r "' + answers.templateLocationPath + '" "' + localPath + '"');

              case 6:
                _context.next = 8;
                return (0, _childProcessPromise2.default)('rm -rf "' + _path2.default.join(localPath, '.git') + '"');

              case 8:
                return _context.abrupt('return', { localPath: localPath });

              case 9:
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

  return DevelopmentCloneDialog;
}();

exports.default = DevelopmentCloneDialog;
module.exports = exports['default'];
//# sourceMappingURL=development-clone.dialog.js.map