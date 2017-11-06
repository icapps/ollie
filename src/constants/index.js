/* eslint import/prefer-default-export: 1 */

const projectTypes = [
  {
    name: 'Backend',
    survey: 'BackendSurvey',
    boilerPlates: [
      {
        name: 'Express',
        repository: 'git@github.com:icapps/nodejs-express-template.git',
      },
    ],
  },
  {
    name: 'Frontend',
    survey: 'FrontendSurvey',
    boilerPlates: [
      {
        name: 'React (redux-thunk)',
        repository: 'git@github.com:icapps/react-thunk-template.git',
      }, {
        name: 'React (redux-sagas)',
        repository: 'git@github.com:icapps/react-sagas-template.git',
      },

    ],
  },
  {
    name: 'Android',
    survey: 'AndroidSurvey',
    boilerPlates: [
      {
        name: 'Default',
        repository: 'git@github.com:icapps/android-template.git',
      },
    ],
  },
  {
    name: 'iOS',
    survey: 'IOSSurvey',
    boilerPlates: [
      {
        name: 'Swift',
        repository: 'git@github.com:icapps/ios-swift-template.git',
      }, {
        name: 'Objective-C',
        repository: 'git@github.com:icapps/objective-c-template.git',
      },
    ],
  },
  {
    name: 'Development',
    survey: 'DevelopmentSurvey',
    boilerPlates: [],
  }
];

const providers = [
  {
    name: 'Bitbucket',
    repository: 'bitbucket.org',
    api: 'https://api.bitbucket.org/2.0',
  }, {
    name: 'Github',
    repository: 'github.com',
    api: 'https://api.github.com',
  },
];

export { projectTypes, providers };

