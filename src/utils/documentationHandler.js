import JsonHandler from './jsonHandler';

export default class DocumentationHandler {
  constructor(answers, localRepository, type) {
    this.answers = answers;
    this.localRepository = localRepository;
    this.remoteRepository = null;
    this.type = type;
  }

  setDocumentation() {
    if (this.type === 'WEB') return this.setWebProject();
    else if (this.type === 'IOS') return this.setIOSProject();
    return this.setAndroidProject();
  }

  /**
   * WEB
   */

  setWebProject() {
    return this.readPackageJson()
    .then(packageJson => this.writePackageJson(JsonHandler.replaceJsonValues(packageJson, this.getJsonValues())));
  }

  getJsonValues() {
    return {
      name: this.answers.projectName,
      author: 'icapps',
      description: this.answers.description,
      repository: this.getCorrectRepositoryInfo(),
    };
  }

  getCorrectRepositoryInfo() {
    if (this.remoteRepository) {
      return {
        type: 'git',
        url: this.remoteRepository,
      };
    }
    return {};
  }

  readPackageJson() {
    return JsonHandler.readJson(`${this.localRepository.path}/package.json`);
  }

  writePackageJson(values) {
    return JsonHandler.writeJson(`${this.localRepository.path}/package.json`, values);
  }


  /**
   * IOS
   */

  setIOSProject() {
    return true;
  }


  /**
   * ANDROID
   */

  setAndroidProject() {
    return true;
  }

  /**
   * SETTERS
   */
  setRemoteRepository(remoteRepository) {
    this.remoteRepository = remoteRepository;
  }

}
