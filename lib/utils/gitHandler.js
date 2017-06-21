

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _fsExtra = require('fs-extra');

const _fsExtra2 = _interopRequireDefault(_fsExtra);

const _childProcessPromise = require('./child-process-promise');

const _childProcessPromise2 = _interopRequireDefault(_childProcessPromise);

const _spinner = require('./spinner');

const _spinner2 = _interopRequireDefault(_spinner);

const _apiServiceFactory = require('./../factories/apiServiceFactory');

const apiServiceFactory = _interopRequireWildcard(_apiServiceFactory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

const GitHandler = (function () {
  function GitHandler(answers, localRepository) {
    _classCallCheck(this, GitHandler);

    this.answers = answers;
    this.name = answers.projectName;
    this.boilerplate = answers.boilerplate;

    this.localRepository = localRepository;
    this.remoteRepository = null;
    this.apiService = apiServiceFactory[`create${this.answers.gitService.name}ApiService`](this.answers);
  }

  _createClass(GitHandler, [{
    key: 'setRemote',
    value: function setRemote() {
      // const spinner = new Spinner('Initialising new git repository and adding remote %s', true);
      return (0, _childProcessPromise2.default)(`git -C ${this.localRepository.path} remote add origin ${this.remoteRepository}`);
    },
  }, {
    key: 'initializeGit',
    value: function initializeGit() {
      return (0, _childProcessPromise2.default)(`git -C ${this.localRepository.path} init`);
    },
  }, {
    key: 'initialCommit',
    value: function initialCommit() {
      const _this = this;

      return Promise.resolve().then(() => (0, _childProcessPromise2.default)(`git -C ${_this.localRepository.path} add .`)).then(() => (0, _childProcessPromise2.default)(`git -C ${_this.localRepository.path} commit -m 'initial commit'`));
    },
  }, {
    key: 'createRemoteRepository',
    value: function createRemoteRepository() {
      const _this2 = this;

      return this.apiService.createRepository().then(remoteRepositoryUrl => (0, _childProcessPromise2.default)(`git -C ${_this2.localRepository.path} remote add origin ${remoteRepositoryUrl}`));
    },
  }, {
    key: 'pushToRemote',
    value: function pushToRemote() {
      return (0, _childProcessPromise2.default)(`git -C ${this.localRepository.path} push origin master`);
    },
  }, {
    key: 'cloneTemplate',
    value: function cloneTemplate() {
      const _this3 = this;

      if (this.answers.templateLocation === 'LOCAL') {
        return new Promise((resolve, reject) => {
          _fsExtra2.default.copy(_this3.answers.templateLocationPath, _this3.localRepository.path, (error) => {
            if (error) reject(error);
            (0, _childProcessPromise2.default)(`rm -rf ${_this3.localRepository.path}/.git`).then(resolve);
          });
        });
      }
      return (0, _childProcessPromise2.default)(`git clone ${this.boilerplate.repository} ${this.localRepository.path} && rm -rf ${this.localRepository.path}/.git`);
    },
  }]);

  return GitHandler;
}());

exports.default = GitHandler;
