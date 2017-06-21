

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _jsonHandler = require('./jsonHandler');

const _jsonHandler2 = _interopRequireDefault(_jsonHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

const DocumentationHandler = (function () {
  function DocumentationHandler(answers, localRepository, type) {
    _classCallCheck(this, DocumentationHandler);

    this.answers = answers;
    this.localRepository = localRepository;
    this.remoteRepository = null;
    this.type = type;
  }

  _createClass(DocumentationHandler, [{
    key: 'setDocumentation',
    value: function setDocumentation() {
      if (this.type === 'WEB') return this.setWebProject(); else if (this.type === 'IOS') return this.setIOSProject();
      return this.setAndroidProject();
    },

    /**
     * WEB
     */

  }, {
    key: 'setWebProject',
    value: function setWebProject() {
      const _this = this;

      return this.readPackageJson().then(packageJson => _this.writePackageJson(_jsonHandler2.default.replaceJsonValues(packageJson, _this.getJsonValues())));
    },
  }, {
    key: 'getJsonValues',
    value: function getJsonValues() {
      return {
        name: this.answers.projectName,
        author: 'icapps',
        description: this.answers.description,
        repository: this.getCorrectRepositoryInfo(),
      };
    },
  }, {
    key: 'getCorrectRepositoryInfo',
    value: function getCorrectRepositoryInfo() {
      if (this.remoteRepository) {
        return {
          type: 'git',
          url: this.remoteRepository,
        };
      }
      return {};
    },
  }, {
    key: 'readPackageJson',
    value: function readPackageJson() {
      return _jsonHandler2.default.readJson(`${this.localRepository.path}/package.json`);
    },
  }, {
    key: 'writePackageJson',
    value: function writePackageJson(values) {
      return _jsonHandler2.default.writeJson(`${this.localRepository.path}/package.json`, values);
    },

    /**
     * IOS
     */

  }, {
    key: 'setIOSProject',
    value: function setIOSProject() {
      return true;
    },

    /**
     * ANDROID
     */

  }, {
    key: 'setAndroidProject',
    value: function setAndroidProject() {
      return true;
    },

    /**
     * SETTERS
     */

  }, {
    key: 'setRemoteRepository',
    value: function setRemoteRepository(remoteRepository) {
      this.remoteRepository = remoteRepository;
    },
  }]);

  return DocumentationHandler;
}());

exports.default = DocumentationHandler;
