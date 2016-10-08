import { exec } from 'child_process';
import chalk from 'chalk';
import { Spinner } from 'cli-spinner';
import { formatCloneCommand } from './format-clone-command';

export function cloneRepository(cloneData) {
  const { boilerplate, name } = cloneData;
  const cloneCmd = formatCloneCommand(cloneData);

  return new Promise((resolve, reject) => {
    const spinner = new Spinner(`Cloning ${boilerplate.name} into ./${name} %s`);
    spinner.setSpinnerString('|/-\\');
    spinner.start();

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
