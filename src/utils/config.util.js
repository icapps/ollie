import { promisify } from 'util';
import fs from 'fs';
import { defaultConfig } from '../constants';

const fsStat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function getConfig() {
  const { path: configPath } = defaultConfig;
  let { content: config } = defaultConfig;

  try {
    await fsStat(configPath);
    const file = await readFile(configPath);
    config = JSON.parse(file);
  } catch (e) {
    await writeFile(configPath, JSON.stringify(config));
  }

  return config;
}

async function saveConfig(config) {
  await writeFile(defaultConfig.path, JSON.stringify(config));
}

export default {
  get: getConfig,
  save: saveConfig,
};
