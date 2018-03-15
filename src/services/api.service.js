import request from 'request';
import url from 'url';

class ApiServiceError extends Error {
  constructor(error) {
    const message = error ? (error.details || error.message) : 'Unknown error';
    super(message);
  }
}

class ApiService {
  constructor(answers) {
    this.username = answers.gitServiceUsername;
    this.password = answers.gitServicePassword;
    this.repoName = answers.projectName.toLowerCase();

    const urlObject = url.parse(answers.gitService.api);
    this.service = {
      name: answers.gitService.name,
      protocol: urlObject.protocol,
      host: urlObject.host,
      pathname: urlObject.pathname,
      remote: answers.gitService.repository,
    };
  }

  // TODO: create a repository under a new/existing team/project - replace serviceUsername with teamName for example
  getRequestUrl() {
    throw Error('Implement in ApiService implementation');
  }

  getRequestBody() {
    throw Error('Implement in ApiService implementation');
  }

  getHeaders(){
    return { authorization: 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64'), 'User-Agent': 'request' }
  }

  getRemoteRepo() {
    return `git@${this.service.remote}:icapps/${this.repoName}.git`;
  }

  getErrorObject(body, requestOptions) {
    if (!body.error) return { message: 'Unknown error', requestOptions };
    return ({
      message: body.error.detail || body.error.message,
      requestOptions,
    });
  }

  createRepository() {
    return new Promise((resolve, reject) => {
      const options = {
        url: this.getRequestUrl(),
        body: this.getRequestBody(),
        method: 'POST',
        json: true,
        headers: this.getHeaders(),
      };
      request(options, (error, response, body) => {
        if (!error && response.statusCode < 400) resolve(this.getRemoteRepo());
        else reject(error || new ApiServiceError(body.error));
      });
    });
  }
}

export class GithubApiService extends ApiService {
  getRequestBody() {
    return {
      name: this.repoName,
      private: false,
    };
  }

  getRequestUrl() {
    return 'https://api.github.com/orgs/icapps/repos';
  }

}

export class BitBucketApiService extends ApiService {
  getRequestBody() {
    return {
      name: this.repoName,
      is_private: true,
    };
  }

  getRequestUrl() {
    return `https://api.bitbucket.org/2.0/repositories/icapps/${this.repoName}`
  }
}
