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

var _git = require('./../utils/git.util');

var _git2 = _interopRequireDefault(_git);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _childProcessPromise = require('./../utils/child-process-promise');

var _childProcessPromise2 = _interopRequireDefault(_childProcessPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalCloneDialog = function () {
  function LocalCloneDialog(repository, name) {
    _classCallCheck(this, LocalCloneDialog);

    this.name = name;
    this.repository = repository;

    this.questions = {
      name: 'localPath',
      message: 'Where would you like to store your new project?',
      type: 'string',
      default: process.cwd()
    };
  }

  _createClass(LocalCloneDialog, [{
    key: 'start',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var answers, clonePath;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _inquirer2.default.prompt(this.questions);

              case 2:
                answers = _context.sent;
                clonePath = _path2.default.join(answers.localPath, this.name);
                _context.next = 6;
                return _fsExtra2.default.pathExistsSync(clonePath);

              case 6:
                if (!_context.sent) {
                  _context.next = 8;
                  break;
                }

                throw new Error('Couldn\'t clone repository, this path already exists:', clonePath);

              case 8:
                _context.next = 10;
                return _git2.default.clone(this.repository, clonePath);

              case 10:
                return _context.abrupt('return', {
                  localPath: clonePath
                });

              case 11:
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

  return LocalCloneDialog;
}();

exports.default = LocalCloneDialog;
module.exports = exports['default'];
//# sourceMappingURL=local-clone.dialog.js.map