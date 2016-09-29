const questionsExample = `
So you are a web developer, tell me what kind of web application you would like to generate? express|keystone|sales|angular|react
    INPUT

What will be the name of the project?
    INPUT

    Let me setup your Node Express project...

We noticed you didn't enter any Bitbucket credentials, would you mind giving me your Bitbucket email address?
INPUT

And now you password? Don't worry, I won't tell anyone...
INPUT

_waiting for Bitbucket_

I noticed you are a member in multiple teams. In which team would you like me to add this new repo? icapps|fousa
INPUT
`;


class WebQuestionnaire {
    constructor() {
        console.log('new WebQuestionaire');
    }
    
    ask() {
        console.log('asking web stuff...');
    }
}

module.exports = WebQuestionnaire;