import chai from 'chai';
import chaiThings from 'chai-things';

chai.use(chaiThings);
const expect = chai.expect;

const projectTypes = require('./../src/constants').projectTypes;

describe('Project Types', () => {
  it('should have a Survey for every ProjectType', () => {
    expect(projectTypes).to.all.have.property('survey');
  });
  it('should have a survey function for every ProjectType', () => {
    expect(projectTypes[0].survey).to.be.a('string');
  });
});
