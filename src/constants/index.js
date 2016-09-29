const projectTypes = [
    {
        name: 'Web',
        questionnaire: 'WebQuestionnaire',
        boilerPlates: [
            {
                name: 'Express',
                repository: 'https://bitbucket.org/samover/node-express-template'
            }
        ]
    },
    {
        name: 'Android',
        boilerPlates: []
    },
    {
        name: 'iOS',
        boilerPlates: []
    },
]


module.exports = {
    projectTypes,
};
