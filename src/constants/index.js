const projectTypes = [
  {
    name: 'Web',
    survey: 'WebSurvey',
    boilerPlates: [
      {
        name: 'Express',
        repository: 'https://github.com/icapps/node-express-template.git',
      }, {
        name: 'Sails',
        repository: 'https://bitbucket.org/samover/node-sails-template',
      }, {
        name: 'Keystone',
        repository: 'https://bitbucket.org/samover/node-keystone-template',
      },
    ],
    providers: [
      {
        name: 'Bitbucket',
        repository: 'https://bitbucket.org',
        api: 'https://api.bitbucket.org/2.0'
      }, {
        name: 'Github',
        repository: 'https://github.com',
        api: ''
      },
    ]
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
