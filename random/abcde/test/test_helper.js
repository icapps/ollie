/**
 * test_helper.js
 * test
 *
 * Created by samover on 24/09/2016.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';

require('./../env');
const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const dirtyChai = require('dirty-chai');

chai.config.includeStack = true;
chai.config.showDiff = true;
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(dirtyChai);

global.expect = chai.expect;
global.sinon = sinon;
global.nock = require('nock');
global.request = require('supertest-as-promised');
