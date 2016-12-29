const fs = require('fs');

export default class localRepository{
  constructor(path,name){
    this.path = path === '' || !path ? `${__dirname}/${name}` : `${path}/${name}`;
    this.createLocalDirectory();
  }

  createLocalDirectory(){
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
