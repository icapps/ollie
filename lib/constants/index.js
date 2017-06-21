

Object.defineProperty(exports, '__esModule', {
  value: true,
});
/* eslint import/prefer-default-export: 1 */

const projectTypes = [{
  name: 'Web',
  survey: 'WebSurvey',
  boilerPlates: [{
    name: 'Express',
    repository: 'git@github.com:icapps/node-express-template.git',
  }, {
    name: 'Sails',
    repository: 'git@bitbucket.org:samover/node-sails-template',
  }, {
    name: 'Keystone',
    repository: 'git@bitbucket.org:samover/node-keystone-template',
  }],
  providers: [{
    name: 'Bitbucket',
    repository: 'bitbucket.org',
    api: 'https://api.bitbucket.org/2.0',
  }, {
    name: 'Github',
    repository: 'github.com',
    api: 'https://api.github.com',
  }],
}, {
  name: 'Android',
  survey: 'AndroidSurvey',
  boilerPlates: [{
    name: 'Default',
    repository: 'git@github.com:icapps/android-template.git',
  }],
}, {
  name: 'iOS',
  survey: 'IOSSurvey',
  boilerPlates: [{
    name: 'Swift',
    repository: 'git@github.com:icapps/ios-swift-template.git',
  }, {
    name: 'Objective-C',
    repository: 'git@github.com:icapps/objective-c-template.git',
  }],
}];

exports.projectTypes = projectTypes;
