'use strict';

import assert from 'assert';
import chai from 'chai';
import chaiThings from 'chai-things';

chai.should();
chai.use(chaiThings);

describe('Project Types', function describe() {
  const projectTypes = require('./../src/constants').projectTypes;


  it('should have a Survey for every ProjectType', function test() {
    projectTypes.should.all.have.property('survey');
  });

  it('should have a survey function for every ProjectType', function test() {
    assert.typeOf(projectTypes[0].survey, 'function');
  });
});
