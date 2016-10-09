const projectTypes = [
    {
        name: 'Web',
        survey: 'WebSurvey',
        boilerPlates: [
            {
                name: 'Express',
                repository: 'https://bitbucket.org/samover/node-express-template',
            }, {
                name: 'Sails',
                repository: 'https://bitbucket.org/samover/node-sails-template',
            }, {
                name: 'Keystone',
                repository: 'https://bitbucket.org/samover/node-keystone-template',
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
