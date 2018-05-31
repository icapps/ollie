#!/usr/bin/env node

import 'babel-polyfill';
import readPackageSync from 'read-package-json';
import { promisify } from 'util';

import program from 'commander';
import Ollie from './ollie';
import { projectTypes } from './constants';
import surveys from './surveys';

const readPackage = promisify(readPackageSync);

const run = async () => {
  const pkg = await readPackage('package.json');

  program
    .version(pkg.version)
    .option('-d, --dev', 'Run in development mode')
    .parse(process.argv);

  const ollie = new Ollie({
    projectTypes,
    surveys,
    development: program.dev,
  });

  return ollie.start();
};

run();
