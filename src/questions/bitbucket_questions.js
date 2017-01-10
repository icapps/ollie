const bitbucketCredentialQuestions = [
  {
    name: 'gitServiceUsername',
    message: 'We noticed you didn\'t enter any Bitbucket credentials, would you mind giving me your Bitbucket username?',
    type: 'string',
    when: answers => answers.createRepository && answers.gitService.name === 'Bitbucket',
  },
  {
    name: 'gitServicePassword',
    message: 'And now you password? Don\'t worry, I won\'t tell anyone...',
    type: 'password',
    when: answers => answers.createRepository && answers.gitService.name === 'Bitbucket',
  },
];

export { bitbucketCredentialQuestions as default };
