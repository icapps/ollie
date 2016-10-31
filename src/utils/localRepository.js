const fs = require('fs');

let localRepo;

export function create(data) {
  let { localRepositoryPath, name } = data;

  // If local repository path is not filled in, take current working directory
  localRepo = localRepositoryPath === '' || !localRepositoryPath ? `${__dirname}/${name}` : `${localRepositoryPath}/${name}`;

  return new Promise((resolve, reject) => {

    // Only create new directory if doesn't exist already
    if (!fs.existsSync(localRepo)) {
      fs.mkdir(localRepo, (error) => {
        if (error) reject(error);
        resolve();
      });
    }

    resolve();
  });
}

export { localRepo };
