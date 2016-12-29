import {exec as execute} from 'child_process';

export default function exec(command) {
  return new Promise((resolve, reject) => {
    execute(command, {}, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}
