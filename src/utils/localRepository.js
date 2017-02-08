import fs from 'fs-extra';

export default class localRepository {
  constructor(path, name) {
    this.path = path === '' || !path ? `${__dirname}/${name}` : `${path}/${name}`;
    this.createLocalDirectory();
  }

  // TODO: Check fs-extra for better syntax
  createLocalDirectory() {
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
