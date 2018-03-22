# Ollie project generator

A project generation helper for web, android and ios projects.

[![npm version](https://badge.fury.io/js/ollie.svg)](https://badge.fury.io/js/ollie)
[![Dependencies](https://david-dm.org/icapps/ollie.svg)](https://david-dm.org/icapps/ollie.svg)

## Usage

Ollie is as simple as calling him in your terminal.

```bash
ollie
```

Ollie will guide you through the generation of your new project by asking questions about what project type, your bitbucket credentials, your team, ...

## Installation

Install the binary to make ollie availlable in your cli.

Install via npm

```bash
npm install --global ollie-cli
```

or via yarn

```bash
yarn global add ollie-cli
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

# build and spin up ollie running your local code
$ npm serve

# lint the local
$ npm run lint

# run all tests
$ npm test
```

## Concepts

Two important concepts are **Surveys** and **Questions**.

### Surveys

Surveys are responsible for composing questions in the correct order. Depending on the answers given, either complentary questions are asked or actions are executed. E.g.

- A survey asks what project type (Web, iOS, Android) you want to create. If e.g. the answer is 'Web', we should ask a second question to know what type of web project is wanted.
- A survey asks the project name + Bitbucket credentials. With these answers the repository can be pushed to Bitbucket's remote.

### Questions

Questions must always return question objects (or an array of objects). These question objects must following the [Inquirer](https://github.com/sboudrias/Inquirer.js) questions API.

## Security

Because we use 2 factor authentication we need to create an application password for github and bitbucket. You will be prompted for this password after selecting the "Which service do you wish to use?" [Bitbucket/Github]

## Setup

### Github

[Click here to generate a token](https://github.com/settings/tokens)

Click 'Generate new token'

Give the app password a name and Full control of private repositories.

### Bitbucket

[Click here to create an app password](https://bitbucket.org/account/admin/app-passwords?_ga=2.50414570.230190807.1520934793-39132024.1503226089)

Click 'create app password'

Give the app password a name and write permissions on Repo's and Projects.

### Considerations

The app password will be used to create the repo, but your local ssh key will be used to pull and push the repo.

## code flow

[logo]: Ollie-flow.jpg "Ollie flow"

## Bugs

When you find issues, please report them:

[https://github.com/icapps/ollie/issues](https://github.com/icapps/ollie/issues)

Be sure to include all of the output from the npm command that didn't work as expected. The npm-debug.log file is also helpful to provide.

## Authors

See the list of [contributors](https://github.com/icapps/tree-house/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
