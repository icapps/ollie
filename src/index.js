import 'babel-polyfill';

import program from 'commander';
import Ollie from './Ollie';
import { projectTypes } from './constants';
import surveys from './surveys';

program
  .version('0.0.1')
  .option('-d, --dev', 'Run in development mode')
  .parse(process.argv);

const ollie = new Ollie({
  projectTypes,
  surveys,
  development: program.dev,
});

ollie.start();
