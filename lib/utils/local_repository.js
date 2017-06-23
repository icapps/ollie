'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _git = require('../utils/git.util');

var _git2 = _interopRequireDefault(_git);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalRepository = function () {
  function LocalRepository(path, name) {
    _classCallCheck(this, LocalRepository);

    this.path = path === '' || !path ? process.cwd() + '/' + name : path + '/' + name;
  }

  // TODO: Check fs-extra for better syntax


  _createClass(LocalRepository, [{
    key: 'createLocalRepository',
    value: function createLocalRepository() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        // Only create new directory if doesn't exist already
        if (!_fsExtra2.default.existsSync(_this.path)) {
          _fsExtra2.default.mkdir(_this.path, function (error) {
            if (error) reject(error);
            resolve();
          });
        }
        resolve();
      });

      // const gitHandler = new GitHandler(answers, localRepository);
      _git2.default.clone(repository, this.path);
    }
  }]);

  return LocalRepository;
}();

exports.default = LocalRepository;
module.exports = exports['default'];
//# sourceMappingURL=local_repository.js.map