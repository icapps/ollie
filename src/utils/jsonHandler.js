import * as fs from 'fs-extra';

export default class JsonHandler {
  static replaceJsonValues(object, values) {
    return Object.assign({}, object, values);
  }

  static readJson(path) {
    return new Promise((resolve, reject) => {
      fs.readJson(path, (err, json) => {
        if (err) reject(err);
        resolve(json);
      });
    });
  }

  static writeJson(path, data) {
    return new Promise((resolve, reject) => {
      fs.writeJson(path, data, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}
