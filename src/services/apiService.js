import request from 'request';
import url from 'url';

// TODO: add Github support
export default class ApiService {

    constructor(answers) {
        this.answers = answers;
        this.gitService = answers.gitService;
    }

    createRepository() {
        return new Promise((resolve, reject) => {
            const urlObject = url.parse(this.gitService.api);

            const options = {
                method: 'POST',
                json: true,
                body: {},
            };

            let path;
            let remoteRepository = '';

            switch (this.gitService.name) {
                case 'Bitbucket': {
                    const { bitbucketUserName, bitbucketPassword } = this.answers;

                    // TODO: create a repository under a new/existing team/project - replace bitbucketUserName with teamName for example
                    path = `${urlObject.protocol}//${bitbucketUserName}:${bitbucketPassword}@${urlObject.host}${urlObject.pathname}/repositories/${bitbucketUserName}/${this.answers.name.toLowerCase()}`;
                    remoteRepository = `${urlObject.protocol}//${bitbucketUserName}@bitbucket.org/${bitbucketUserName}/${this.answers.name.toLowerCase()}.git`;

                    // Only private repo's at the moment
                    options.body.is_private = true;
                    break;
                }
                case 'Github': {
                    path = '';
                    break;
                }
                default: {
                    break;
                }
            }

            options.url = path;
            request(options, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    resolve(remoteRepository);
                } else {
                    reject({ error, body });
                }
            });
        });
    }

}

