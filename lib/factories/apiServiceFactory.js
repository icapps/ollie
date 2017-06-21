

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.createBitbucketApiService = exports.createGithubApiService = undefined;

const _apiService = require('../services/apiService');

const apiServices = _interopRequireWildcard(_apiService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const createGithubApiService = exports.createGithubApiService = function createGithubApiService(answers) {
  return new apiServices.GithubApiService(answers);
};
const createBitbucketApiService = exports.createBitbucketApiService = function createBitbucketApiService(answers) {
  return new apiServices.BitBucketApiService(answers);
};
