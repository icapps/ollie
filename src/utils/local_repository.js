import fs from 'fs-extra';

export default class LocalRepository {
  constructor(path, name) {
    this.path = (path === '' || !path) ? `${process.cwd()}/${name}` : `${path}/${name}`;
  }

  // TODO: Check fs-extra for better syntax
  createLocalRepository() {
    return new Promise((resolve, reject) => {
      // Only create new directory if doesn't exist already
      if (!fs.existsSync(this.path)) {
        fs.mkdir(this.path, (error) => {
          if (error) reject(error);
          resolve();
        });
      }
      resolve();
    });
  }
}
