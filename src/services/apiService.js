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
    this.repoDescription = answers.description;
    console.log('@@@@@@@@@@@@@@@@@@@@@');
    console.log('answers', answers);
    console.log('@@@@@@@@@@@@@@@@@@@@@');
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

  getRemoteRepo() {
    return `git@${this.service.remote}:${this.username}/${this.repoName}.git`;
  }

  getRepoUrl() {
    return `${this.service.protocol}//${this.service.remote}/${this.username}/${this.repoName}`;
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
      };

      request(options, (error, response, body) => {
        if (!error && response.statusCode === 200) resolve(this.getRemoteRepo());
        else reject(error || new ApiServiceError(body.error));
      });
    });
  }
}

export class GithubApiService extends ApiService {
  // see https://developer.github.com/v3/repos/#create
  getRequestBody() {
    return {
      name: this.repoName,
      description: this.repoDescription,
      private: false,
    };
  }

  getRequestUrl() {
    return `${this.service.protocol}//${this.username}:${this.password}@${this.service.host}${this.service.pathname}repos/${this.username}/${this.repoName}`;
  }

}

export class BitBucketApiService extends ApiService {
  getRequestBody() {
    return {
      is_private: true,
    };
  }

  getRequestUrl() {
    return `${this.service.protocol}//${this.username}:${this.password}@${this.service.host}${this.service.pathname}/repositories/${this.username}/${this.repoName}`;
  }
}
