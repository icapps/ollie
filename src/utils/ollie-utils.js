import fs from 'fs-extra';
import path from 'path';
import yaml from 'js-yaml';

export default class OllieHelpers {

  static async getConfig(projectPath) {
    const configPath = path.join(projectPath, 'ollie.yml');

    if (await fs.exists(configPath)) {
      const config = await fs.readFileSync(configPath, 'utf8');
      return yaml.safeLoad(config);
    }

    return {};
  }
}

