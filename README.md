# Ollie *WIP*

A project generation helper.


## Usage

Ollie is as simple as calling him in your terminal.

```bash
$ ollie
```

Ollie will guide you through the generation of your new project by asking questions about what project type, your bitbucket credentials, your team, ...


### Installation

Install the binary to make ollie availlable in your cli.

```bash
$ npm install --global ollie
```

To push a project to Bitbucket, be sure to add your machine's ssh key to your Bitbucket account.  


## Boilerplates

A boilerplate can be of any language and framework type. Ollie knows predefined boileplates but don't feel held back to create your own boilerplate. 

In need of special variable parts inside your boilerplate? `ollie.yml` can help with that!

### `ollie.yml`

Ollie can ask questions specific for your boilerplate. You can define theses questions in a file `ollie.yml`. An example: 

```yaml
replacementQuestions:
  - name: NAME
    message: Some name
  - name:   DESCRIPTION
    message: Describing the project
  - name: AUTHOR_EMAIL
    message: Author email address

```


## Development

This repository is only meant for development. If you are only interested in using Ollie, install him through npm as explained in [installation](#Installation).

When developing, you should ensure all npm modules are installed: `npm install`.

These are all useful scripts for development:

```bash
# spin up ollie running your local code
$ npm start

# lint the local
$ npm run lint

# run all tests
$ npm test
```


### Concepts

Two important concepts are **Surveys** and **Questions**.


#### Surveys

Surveys are responsible for composing questions in the correct order. Depending on the answers given, either complentary questions are asked or actions are executed. E.g.

- A survey asks what project type (Web, iOS, Android) you want to create. If e.g. the answer is 'Web', we should ask a second question to know what type of web project is wanted.
- A survey asks the project name + Bitbucket credentials. With these answers the repository can be pushed to Bitbucket's remote.



#### Questions

Questions must always return question objects (or an array of objects). These question objects must following the [Inquirer](https://github.com/sboudrias/Inquirer.js) questions API.


