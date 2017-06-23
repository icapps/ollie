'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// dialogs


// utils


var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _boilerplate = require('../dialogs/boilerplate.dialog');

var _boilerplate2 = _interopRequireDefault(_boilerplate);

var _developmentClone = require('../dialogs/development-clone.dialog');

var _developmentClone2 = _interopRequireDefault(_developmentClone);

var _replaceVariables = require('../dialogs/replace-variables.dialog');

var _replaceVariables2 = _interopRequireDefault(_replaceVariables);

var _gitUtil = require('../utils/git.util.js');

var _gitUtil2 = _interopRequireDefault(_gitUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DevelopmentSurvey = function () {
  function DevelopmentSurvey() {
    _classCallCheck(this, DevelopmentSurvey);

    this.answers = {};
  }

  _createClass(DevelopmentSurvey, [{
    key: 'start',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var boilerplateDialog, boilerplateAnswers, cloneDialog, cloneAnswers, git, replaceVariablesDialog;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                boilerplateDialog = new _boilerplate2.default('dev');
                _context.next = 3;
                return boilerplateDialog.start();

              case 3:
                boilerplateAnswers = _context.sent;

                this.answers.projectName = boilerplateAnswers.projectName;

                cloneDialog = new _developmentClone2.default(this.answers.projectName);
                _context.next = 8;
                return cloneDialog.start();

              case 8:
                cloneAnswers = _context.sent;

                this.answers.localPath = cloneAnswers.localPath;

                // git
                git = new _gitUtil2.default(this.answers, this.answers.localPath);
                _context.next = 13;
                return git.setup();

              case 13:
                replaceVariablesDialog = new _replaceVariables2.default(this.answers.projectName, this.answers.localPath);
                _context.next = 16;
                return replaceVariablesDialog.start();

              case 16:
                return _context.abrupt('return', Promise.resolve(this.answers));

              case 17:
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

  return DevelopmentSurvey;
}();

exports.default = DevelopmentSurvey;
module.exports = exports['default'];
//# sourceMappingURL=development.survey.js.map