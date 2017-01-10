import request from 'request';
import url from 'url';

// TODO: make BitBucketService && GitHubService implementations
export default class ApiService {

    constructor(answers) {
        this.username = answers.gitServiceUsername;
        this.password = answers.gitServicePassword;
        this.repoName = answers.name.toLowerCase();
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
    getPath() {
        return `${this.service.protocol}//${this.username}:${this.password}@${this.service.host}/${this.service.pathname}/repositories/${this.username}/${this.repoName}`;
    }

    getRemoteRepo() {
        return `git@${this.service.remote}:${this.username}/${this.repoName}.git`;
    }

    createRepository() {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                json: true,
                body: {},
            };

            options.body.is_private = true;
            options.url = this.getPath();

            request(options, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    resolve(this.getRemoteRepo());
                } else {
                    reject({ error, body });
                }
            });
        });
    }
}

