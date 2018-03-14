'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../services/api.service');

var apiServices = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var createGithubApiService = function createGithubApiService(answers) {
  return new apiServices.GithubApiService(answers);
};
var createBitbucketApiService = function createBitbucketApiService(answers) {
  return new apiServices.BitBucketApiService(answers);
};

exports.default = {
  Github: createGithubApiService,
  Bitbucket: createBitbucketApiService
};
module.exports = exports['default'];
//# sourceMappingURL=api-service.factory.js.map