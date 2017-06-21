

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _fsExtra = require('fs-extra');

const _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

const localRepository = (function () {
  function localRepository(path, name) {
    _classCallCheck(this, localRepository);

    this.path = path === '' || !path ? `${process.cwd()}/${name}` : `${path}/${name}`;
    console.log(this.path);
  }

  // TODO: Check fs-extra for better syntax


  _createClass(localRepository, [{
    key: 'createLocalDirectory',
    value: function createLocalDirectory() {
      const _this = this;

      return new Promise((resolve, reject) => {
        // Only create new directory if doesn't exist already
        if (!_fsExtra2.default.existsSync(_this.path)) {
          _fsExtra2.default.mkdir(_this.path, (error) => {
            if (error) reject(error);
            resolve();
          });
        }
        resolve();
      });
    },
  }]);

  return localRepository;
}());

exports.default = localRepository;
