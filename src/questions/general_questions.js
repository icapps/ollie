const projectNameQuestions = [
  {
    name: 'name',
    message: 'What will be the name of the project?',
    type: 'string',
  },
  {
    name: 'localRepositoryPath',
    message: `Where would you like to store your new project? (${__dirname})`,
    type: 'string',
  },
  {
    name: 'templateLocation',
    message: 'Would you like to use an existing template or use your own local template?',
    type: 'list',
    choices: [{ name: 'Existing template', value: 'GIT' }, { name: 'Own local template', value: 'LOCAL' }],
  },
  {
    name: 'templateLocationPath',
    message: 'Please provide the path to your own project template',
    type: 'string',
    when: answers => answers.templateLocation === 'LOCAL',
  },
];


export { projectNameQuestions as default };
