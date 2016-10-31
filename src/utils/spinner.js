import { Spinner } from 'cli-spinner';

let spinner;

export function start(text) {
  spinner = new Spinner(text);
  spinner.setSpinnerString('|/-\\');
  spinner.start();
}

export function stop() {
  if (spinner) {
    spinner.stop();
  }
}
