import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default class OllieHelpers {

  static getConfig(projectPath) {
    return new Promise((resolve, reject) => {
      const ollieConfigFile = fs.readFileSync(path.join(projectPath, 'ollie.yml'), 'utf8');
      resolve(yaml.safeLoad(ollieConfigFile));
    });
  }
}

