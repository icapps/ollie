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

var _constants = require('./../constants');

var _apiService = require('./../factories/api-service.factory');

var _apiService2 = _interopRequireDefault(_apiService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemoteRepositoryDialog = function () {
  function RemoteRepositoryDialog(projectName) {
    _classCallCheck(this, RemoteRepositoryDialog);

    this.projectName = projectName;

    this.questions = [{
      name: 'gitService',
      message: 'Which service do you wish to use?',
      type: 'list',
      choices: _lodash2.default.map(_constants.providers, 'name'),
      filter: function filter(answer) {
        return _lodash2.default.find(_constants.providers, { name: answer });
      }
    }, {
      name: 'gitServiceUsername',
      message: function message(answers) {
        return 'We noticed you didn\'t enter any ' + answers.gitService.name + ' credentials, would you mind giving me your ' + answers.gitService.name + ' username?';
      },
      type: 'string'
    }, {
      name: 'gitServicePassword',
      message: 'And now you password? Don\'t worry, I won\'t tell anyone...',
      type: 'password'
    }];
  }

  _createClass(RemoteRepositoryDialog, [{
    key: 'start',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var answers, apiServiceOptions, remoteRepositoryUrl;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _inquirer2.default.prompt(this.questions);

              case 2:
                answers = _context.sent;
                apiServiceOptions = {
                  gitService: answers.gitService,
                  projectName: this.projectName,
                  gitServiceUsername: answers.gitServiceUsername,
                  gitServicePassword: answers.gitServicePassword
                };


                this.apiService = _apiService2.default[apiServiceOptions.gitService.name](apiServiceOptions);
                _context.prev = 5;
                _context.next = 8;
                return this.apiService.createRepository();

              case 8:
                remoteRepositoryUrl = _context.sent;
                return _context.abrupt('return', remoteRepositoryUrl);

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](5);

                console.log('create remote repo error: ', _context.t0);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12]]);
      }));

      function start() {
        return _ref.apply(this, arguments);
      }

      return start;
    }()
  }]);

  return RemoteRepositoryDialog;
}();

exports.default = RemoteRepositoryDialog;
module.exports = exports['default'];
//# sourceMappingURL=remote-repository.dialog.js.map