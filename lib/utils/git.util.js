'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _childProcessPromise = require('./child-process-promise');

var _childProcessPromise2 = _interopRequireDefault(_childProcessPromise);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _apiService = require('./../factories/api-service.factory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Git = (0, _autobindDecorator2.default)(_class = function () {
  function Git(answers, localRepository) {
    _classCallCheck(this, Git);

    this.localRepository = localRepository;
  }

  _createClass(Git, [{
    key: 'setup',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { development: false };
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.initialize();

              case 2:
                _context.next = 4;
                return this.initialCommit();

              case 4:
                return _context.abrupt('return', Promise.resolve());

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return _ref.apply(this, arguments);
      }

      return setup;
    }()

    // async setupRemote() {
    //   await this.createRemoteRepository();
    //   // await this.setRemote();
    //   // await this.pushToRemote();
    // }

  }, {
    key: 'initialize',
    value: function initialize() {
      return (0, _childProcessPromise2.default)('git -C ' + this.localRepository + ' init');
    }
  }, {
    key: 'initialCommit',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial commit';
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _childProcessPromise2.default)('git -C ' + this.localRepository + ' add .');

              case 2:
                return _context2.abrupt('return', (0, _childProcessPromise2.default)('git -C ' + this.localRepository + ' commit -m \'' + message + '\''));

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initialCommit() {
        return _ref2.apply(this, arguments);
      }

      return initialCommit;
    }()

    // setRemote() {
    //   return exec(`git -C ${this.localRepository} remote add origin ${this.remoteRepository}`);
    // }

    // async createRemoteRepository() {
    //   const remoteRepositoryUrl = await this.apiService.createRepository();
    //   return exec(`git -C ${this.localRepository} remote add origin ${remoteRepositoryUrl}`);
    // }

    // pushToRemote() {
    //   return exec(`git -C ${this.localRepository} push origin master`);
    // }

  }], [{
    key: 'clone',
    value: function clone(repository, path) {
      return (0, _childProcessPromise2.default)('git clone ' + repository + ' ' + path + ' && rm -rf ' + path + '/.git');
    }
  }]);

  return Git;
}()) || _class;

exports.default = Git;
module.exports = exports['default'];
//# sourceMappingURL=git.util.js.map