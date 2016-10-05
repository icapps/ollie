import { exec } from 'child_process';
import chalk from 'chalk';
import { Spinner } from 'cli-spinner';

export function cloneRepository(boilerplate, name) {
  return new Promise((resolve, reject) => {
    const spinner = new Spinner(`Cloning ${boilerplate.name} into ./${name} %s`);
    spinner.setSpinnerString('|/-\\');
    spinner.start();

    const cloneCmd = `git clone ${boilerplate.repository} ${name}`;
    exec(cloneCmd, {}, (err) => {
      if (err) {
        reject(err);
      }

      console.log(chalk.green('Cloned'));
      spinner.stop();
      resolve();
    });
  });
}
