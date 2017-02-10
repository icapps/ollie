# NODE-EXPRESS TEMPLATE PROJECT

## Boilerplate skeleton

* [.npmrc](#.npmrc)
* [.eslintrc](#.eslintrc)
* [.editorconfig](#.editorconfig)
* [.gitignore](#.gitignore)
* [package.json](#package.json)
* [/docs](#/docs)
* [/tests](#/tests)
* [/src](#/src)

### .npmrc
Define https://npm.icapps.com as the npm registry. We will use the private npm registry as :

* a caching proxy when [https://npmjs.com](https://npmjs.com) is down
* a registry for publishing private packages

### .eslintrc

### .editorconfig

### .gitignore

### package.json

### /docs

### /tests

### /src



## Deployment

To use docker

## Installation

```
$ git clone git@bitbucket.org:samover/node-express-template.git`
$ npm install
```

## Running

Either `[NODE_ENV=development] npm start`
Or: `docker-compose up`

## Testing

```
$ npm test
```

## Coverage

```
$ npm coverage
```

## Dependencies

* helmet: [https://github.com/helmetjs/helmet](https://github.com/helmetjs/helmet)

## Bucket list

- swagger setup

- all methods should have a JSdoc block: [http://usejsdoc.org/]()

## Security

As a minimum, [Helmet](https://github.com/helmetjs/helmet) is implemented in this boilerplate. It is recommended to implement further security measures. A good guide is [https://blog.risingstack.com/node-js-security-checklist/]().

## Contributing

All contributions to this template are welcome. Please follow our [coding guidelines](https://github.com/icapps/coding-guidelines/tree/master/Web)

## License

This node-express template is available under the MIT license. See the LICENSE file for more info.
