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
];


export { projectNameQuestions as default };
