import program from 'commander';
import Ollie from './Ollie';
import { projectTypes } from './constants';
import surveys from './surveys';

program
  .version('0.0.1')
  .option('-d, --dev', 'Run in development mode')
  .parse(process.argv);

if (program.dev) {
  console.log('Run in development mode');
} else {
  const ollie = new Ollie({ projectTypes, surveys });
  ollie.start();
}
