const bitbucketCredentialQuestions = [
  {
    name: 'bitbucketUserName',
    message: 'We noticed you didn\'t enter any Bitbucket credentials, would you mind giving me your Bitbucket username?',
    type: 'string',
  },
  {
    name: 'bitbucketPassword',
    message: 'And now you password? Don\'t worry, I won\'t tell anyone...',
    type: 'password',
  },
];

export { bitbucketCredentialQuestions as default};
