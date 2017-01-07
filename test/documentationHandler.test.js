import chai from 'chai';
import JsonHandler from '../src/utils/jsonHandler';
import DocumentationHandler from '../src/utils/documentationHandler';

const PROJECT_PATH = '/Users/brentvangeertruy/Downloads';

let OLD_VALUES = {};
const answers = {
  boilerplate: {
    name: 'Express',
    repository: 'https://github.com/icapps/node-express-template.git',
  },
  name: 'testapp',
  description: 'New application description',
  localRepositoryPath: PROJECT_PATH,
  templateLocation: 'GIT',
  createRepository: true,
  gitService: {
    name: 'Bitbucket',
    repository: 'https://bitbucket.org',
    api: 'https://api.bitbucket.org/2.0',
  },
  bitbucketUserName: 'iCappsBrent',
  bitbucketPassword: 'notMyRealPassword',
};

const packageJsonPath = `${answers.localRepositoryPath}/${answers.name}/package.json`;

describe('WEB', () => {
  const documentationHandler = new DocumentationHandler(answers, `${answers.localRepositoryPath}/${answers.name}`, 'WEB');

  it('Read current values in package.json', (done) => {
    JsonHandler.readJson(packageJsonPath)
    .then((packageJson) => {
      OLD_VALUES = packageJson;
      done();
    })
    .catch(done);
  });

  it('Edit Package.json', () => {
    documentationHandler.setRemoteRepository('https://iCappsBrent@bitbucket.org/iCappsBrent/testapp.git');
    return documentationHandler.setDocumentation();
  });

  it('Assert correct new values in package.json', (done) => {
    JsonHandler.readJson(packageJsonPath)
    .then((packageJson) => {
      chai.expect(packageJson.toString()).to.equal(JsonHandler.replaceJsonValues(OLD_VALUES, documentationHandler.getJsonValues()).toString());
      done();
    })
    .catch(done);
  });

  it('Revert back changes', () => JsonHandler.writeJson(`${answers.localRepositoryPath}/${answers.name}/package.json`, OLD_VALUES));
});

