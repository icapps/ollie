'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ollie = function () {
  function Ollie() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Ollie);

    this.projectTypes = options.projectTypes;
    this.surveys = options.surveys;
    this.development = options.development;

    this.welcome = function () {};
  }

  _createClass(Ollie, [{
    key: 'start',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var answeringAnswers, surveyAnswers, localPath;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.printWelcome();

                _context.next = 3;
                return _inquirer2.default.prompt(this.openingQuestions());

              case 3:
                answeringAnswers = _context.sent;
                _context.next = 6;
                return this.startSurvey(answeringAnswers);

              case 6:
                surveyAnswers = _context.sent;
                localPath = surveyAnswers.localPath;


                this.printFinish(localPath);

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
  }, {
    key: 'printWelcome',
    value: function printWelcome() {
      (0, _clear2.default)();
      console.log(_figlet2.default.textSync('Ollie', 'Standard'));
      console.log(_chalk2.default.blue('Hi there!'));
      console.log(_chalk2.default.blue('Let\'s get you started with a project...'));
    }
  }, {
    key: 'printFinish',
    value: function printFinish(localPath) {
      console.log(_chalk2.default.blue('Done, your new project is availlable at \'' + localPath + '\' \uD83D\uDC4F'));
    }
  }, {
    key: 'openingQuestions',
    value: function openingQuestions() {
      return [{
        name: 'projectType',
        message: 'What kind of project would you like to generate?',
        type: 'list',
        choices: _lodash2.default.map(this.projectTypes, 'name')
      }];
    }
  }, {
    key: 'startSurvey',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(answers) {
        var project, SurveyClass, survey;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                project = _lodash2.default.find(this.projectTypes, { name: answers.projectType });
                SurveyClass = this.surveys[project.survey];
                survey = new SurveyClass();
                return _context2.abrupt('return', survey.start());

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function startSurvey(_x2) {
        return _ref2.apply(this, arguments);
      }

      return startSurvey;
    }()
  }]);

  return Ollie;
}();

exports.default = Ollie;
module.exports = exports['default'];
//# sourceMappingURL=Ollie.js.map