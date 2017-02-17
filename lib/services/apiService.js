'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BitBucketApiService = exports.GithubApiService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApiServiceError = function (_Error) {
    _inherits(ApiServiceError, _Error);

    function ApiServiceError(error) {
        _classCallCheck(this, ApiServiceError);

        var message = error ? error.details || error.message : 'Unknown error';
        return _possibleConstructorReturn(this, (ApiServiceError.__proto__ || Object.getPrototypeOf(ApiServiceError)).call(this, message));
    }

    return ApiServiceError;
}(Error);

var ApiService = function () {
    function ApiService(answers) {
        _classCallCheck(this, ApiService);

        this.username = answers.gitServiceUsername;
        this.password = answers.gitServicePassword;
        this.repoName = answers.projectName.toLowerCase();
        this.repoDescription = answers.description;
        var urlObject = _url2.default.parse(answers.gitService.api);
        this.service = {
            name: answers.gitService.name,
            protocol: urlObject.protocol,
            host: urlObject.host,
            pathname: urlObject.pathname,
            remote: answers.gitService.repository
        };
    }

    // TODO: create a repository under a new/existing team/project - replace serviceUsername with teamName for example


    _createClass(ApiService, [{
        key: 'getRequestUrl',
        value: function getRequestUrl() {
            throw Error('Implement in ApiService implementation');
        }
    }, {
        key: 'getRequestBody',
        value: function getRequestBody() {
            throw Error('Implement in ApiService implementation');
        }
    }, {
        key: 'getRemoteRepo',
        value: function getRemoteRepo() {
            return 'git@' + this.service.remote + ':' + this.username + '/' + this.repoName + '.git';
        }
    }, {
        key: 'getRepoUrl',
        value: function getRepoUrl() {
            return this.service.protocol + '//' + this.service.remote + '/' + this.username + '/' + this.repoName;
        }
    }, {
        key: 'getErrorObject',
        value: function getErrorObject(body, requestOptions) {
            if (!body.error) return { message: 'Unknown error', requestOptions: requestOptions };
            return {
                message: body.error.detail || body.error.message,
                requestOptions: requestOptions
            };
        }
    }, {
        key: 'createRepository',
        value: function createRepository() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                var options = {
                    url: _this2.getRequestUrl(),
                    body: _this2.getRequestBody(),
                    method: 'POST',
                    json: true
                };

                (0, _request2.default)(options, function (error, response, body) {
                    if (!error && response.statusCode === 200) resolve(_this2.getRemoteRepo());else reject(error || new ApiServiceError(body.error));
                });
            });
        }
    }]);

    return ApiService;
}();

var GithubApiService = exports.GithubApiService = function (_ApiService) {
    _inherits(GithubApiService, _ApiService);

    function GithubApiService() {
        _classCallCheck(this, GithubApiService);

        return _possibleConstructorReturn(this, (GithubApiService.__proto__ || Object.getPrototypeOf(GithubApiService)).apply(this, arguments));
    }

    _createClass(GithubApiService, [{
        key: 'getRequestBody',

        // see https://developer.github.com/v3/repos/#create
        value: function getRequestBody() {
            return {
                name: this.repoName,
                description: this.repoDescription,
                private: false
            };
        }
    }, {
        key: 'getRequestUrl',
        value: function getRequestUrl() {
            return this.service.protocol + '//' + this.username + ':' + this.password + '@' + this.service.host + this.service.pathname + 'repos/' + this.username + '/' + this.repoName;
        }
    }]);

    return GithubApiService;
}(ApiService);

var BitBucketApiService = exports.BitBucketApiService = function (_ApiService2) {
    _inherits(BitBucketApiService, _ApiService2);

    function BitBucketApiService() {
        _classCallCheck(this, BitBucketApiService);

        return _possibleConstructorReturn(this, (BitBucketApiService.__proto__ || Object.getPrototypeOf(BitBucketApiService)).apply(this, arguments));
    }

    _createClass(BitBucketApiService, [{
        key: 'getRequestBody',
        value: function getRequestBody() {
            return {
                is_private: true
            };
        }
    }, {
        key: 'getRequestUrl',
        value: function getRequestUrl() {
            return this.service.protocol + '//' + this.username + ':' + this.password + '@' + this.service.host + this.service.pathname + '/repositories/' + this.username + '/' + this.repoName;
        }
    }]);

    return BitBucketApiService;
}(ApiService);