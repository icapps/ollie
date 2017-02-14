import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getOllieBoilerplateConfig (projectPath) {
  const ollieConfigFile = fs.readFileSync(path.join(projectPath, 'ollie.yml'), 'utf8');
  const ollieConfig = yaml.safeLoad(ollieConfigFile);
  return ollieConfig;
}

