const projectTypes = [
  {
    name: 'Web',
    survey: 'WebSurvey',
    boilerPlates: [
      {
        name: 'Express',
          repository: 'git@github.com:icapps/node-express-template.git',
      }, {
        name: 'Sails',
        repository: 'git@bitbucket.org:samover/node-sails-template',
      }, {
        name: 'Keystone',
        repository: 'git@bitbucket.org:samover/node-keystone-template',
      },
    ],
    providers: [
      {
        name: 'Bitbucket',
        repository: 'bitbucket.org',
        api: 'https://api.bitbucket.org/2.0',
      }, {
        name: 'Github',
        repository: 'github.com',
        api: 'https://api.github.com',
      },
    ],
  },
  {
    name: 'Android',
    survey: 'WebSurvey',
    boilerPlates: [],
  },
  {
    name: 'iOS',
    survey: 'WebSurvey',
    boilerPlates: [],
  },
];

export { projectTypes as default };
