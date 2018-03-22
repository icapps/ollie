import fs from 'fs';

export default class Fs {
  static directoryExists(path) {
    try {
      return fs.statSync(path).isDirectory();
    } catch (e) {
      if (e.code === 'ENOENT') {
        return false;
      }
      throw e;
    }
  }
}
