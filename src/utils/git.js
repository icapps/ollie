import { exec } from 'child_process';
import { formatCloneCommand } from './format-clone-command';
import url from 'url';
import { start as startSpinner, stop as stopSpinner } from './spinner';
import { localRepo } from './../utils/localRepository';
import { createRepository as createRepo } from './../services/apiService';

let remoteRepo;

function getRemoteRepo(data) {
  const { gitService } = data;
  const urlObject = url.parse(gitService.repository);

  switch (gitService.name) {
    case 'Bitbucket':
      const { bitbucketUserName, name } = data;
      return `${urlObject.protocol}//${bitbucketUserName}@${urlObject.host}/${bitbucketUserName}/${name}.git`;
    case 'Github':
      return '';
  }
}

export function initRepository(data) {
  const { name, createRepository } = data;

  return new Promise((resolve, reject) => {

    // Only if new repository is requested
    if (createRepository === 'Yes') {
      startSpinner(`Creating new repository ${name} %cs`);

      createRepo(data)
      .then((response) => {
        stopSpinner();
        remoteRepo = getRemoteRepo(data);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    }

    // TODO: Handle no new repository response
    else {
      resolve();
    }

  });
}

// eslint-disable-next-line import/prefer-default-export
export function cloneRepository(cloneData) {
  const { boilerplate, name } = cloneData;
  const cloneCmd = formatCloneCommand(cloneData);

  return new Promise((resolve, reject) => {
    startSpinner(`Cloning ${boilerplate.name} into ${localRepo} %s`);

    exec(cloneCmd, {}, (err) => {
      if (err) reject(err);
      stopSpinner();
      resolve();
    });
  });
}


export function setRemote() {
  return new Promise((resolve, reject) => {
    startSpinner(`Initialising new git repository and adding remote %s`);

    // TODO - split up into multiple statements (better error handling)
    const setRemoteCmd = `git -C ${localRepo} init && git -C ${localRepo} remote add origin ${remoteRepo}`;

    exec(setRemoteCmd, {}, (err) => {
      if (err) reject(err);
      stopSpinner();
      resolve();
    });

  });
}

export function initialCommit() {
  return new Promise((resolve, reject) => {
    startSpinner(`Pushing initial commit %s`);
    // TODO - split up into multiple statements (better error handling)
    const setRemoteCmd = `git -C ${localRepo} add . && git -C ${localRepo} commit -m 'initial commit' && git -C ${localRepo} push --force origin master`;

    exec(setRemoteCmd, {}, (err) => {
      if (err) reject(err);
      stopSpinner();
      resolve();
    });

  });
}

export { remoteRepo };
