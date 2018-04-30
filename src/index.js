#!/usr/bin/env node

import 'babel-polyfill';

import program from 'commander';
import Ollie from './ollie';
import { projectTypes } from './constants';
import surveys from './surveys';

program
  .version(process.env.npm_package_version)
  .option('-d, --dev', 'Run in development mode')
  .parse(process.argv);


const ollie = new Ollie({
  projectTypes,
  surveys,
  development: program.dev,
});
ollie.start();
