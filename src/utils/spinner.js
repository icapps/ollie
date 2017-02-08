import { Spinner as CliSpinner } from 'cli-spinner';

export default class Spinner {
  constructor(text, autostart) {
    this.spinner = new CliSpinner(text);
    this.spinner.setSpinnerString('|/-\\');

    if (autostart) {
      this.start();
    }
  }

  start() {
    this.spinner.start();
  }

  stop() {
    this.spinner.stop();
  }
}
