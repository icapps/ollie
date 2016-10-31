import url from 'url';
const request = require('request');

// TODO: create a repository under a new/existing team/project
// TODO: add Github support
export function createRepository(data) {
  const { name, gitService } = data;

  return new Promise((resolve, reject) => {
    const urlObject = url.parse(gitService.api);

    const options = {
      method: "POST",
      json: true,
      body: {}
    };

    let path;
    switch (gitService.name) {
      case 'Bitbucket':
        const { bitbucketUserName, bitbucketPassword, name } = data;
        path = `${urlObject.protocol}//${bitbucketUserName}:${bitbucketPassword}@${urlObject.host}${urlObject.pathname}/repositories/${bitbucketUserName}/${name}`;

        // Only private repo's at the moment
        options.body.is_private = true;
        break;
      case 'Github':
        path = '';
        break;
    }
    options.url = path;

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(response);
      } else {
        reject({ error, body });
      }
    });
  });

}

