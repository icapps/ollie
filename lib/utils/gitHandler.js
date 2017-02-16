'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _childProcessPromise = require('./child-process-promise');

var _childProcessPromise2 = _interopRequireDefault(_childProcessPromise);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _apiServiceFactory = require('./../factories/apiServiceFactory');

var apiServiceFactory = _interopRequireWildcard(_apiServiceFactory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitHandler = function () {
  function GitHandler(answers, localRepository) {
    _classCallCheck(this, GitHandler);

    this.answers = answers;
    this.name = answers.projectName;
    this.boilerplate = answers.boilerplate;

    this.localRepository = localRepository;
    this.remoteRepository = null;
    this.apiService = apiServiceFactory['create' + this.answers.gitService.name + 'ApiService'](this.answers);
  }

  _createClass(GitHandler, [{
    key: 'setRemote',
    value: function setRemote() {
      // const spinner = new Spinner('Initialising new git repository and adding remote %s', true);
      return (0, _childProcessPromise2.default)('git -C ' + this.localRepository.path + ' remote add origin ' + this.remoteRepository);
    }
  }, {
    key: 'initializeGit',
    value: function initializeGit() {
      return (0, _childProcessPromise2.default)('git -C ' + this.localRepository.path + ' init');
    }
  }, {
    key: 'initialCommit',
    value: function initialCommit() {
      var _this = this;

      return Promise.resolve().then(function () {
        return (0, _childProcessPromise2.default)('git -C ' + _this.localRepository.path + ' add .');
      }).then(function () {
        return (0, _childProcessPromise2.default)('git -C ' + _this.localRepository.path + ' commit -m \'initial commit\'');
      });
    }
  }, {
    key: 'createRemoteRepository',
    value: function createRemoteRepository() {
      var _this2 = this;

      return this.apiService.createRepository().then(function (remoteRepositoryUrl) {
        return (0, _childProcessPromise2.default)('git -C ' + _this2.localRepository.path + ' remote add origin ' + remoteRepositoryUrl);
      });
    }
  }, {
    key: 'pushToRemote',
    value: function pushToRemote() {
      return (0, _childProcessPromise2.default)('git -C ' + this.localRepository.path + ' push origin master');
    }
  }, {
    key: 'cloneTemplate',
    value: function cloneTemplate() {
      var _this3 = this;

      if (this.answers.templateLocation === 'LOCAL') {
        return new Promise(function (resolve, reject) {
          _fsExtra2.default.copy(_this3.answers.templateLocationPath, _this3.localRepository.path, function (error) {
            if (error) reject(error);
            (0, _childProcessPromise2.default)('rm -rf ' + _this3.localRepository.path + '/.git').then(resolve);
          });
        });
      }
      return (0, _childProcessPromise2.default)('git clone ' + this.boilerplate.repository + ' ' + this.localRepository.path + ' && rm -rf ' + this.localRepository.path + '/.git');
    }
  }]);

  return GitHandler;
}();

exports.default = GitHandler;