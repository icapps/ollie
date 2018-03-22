const { projectTypes } = require('./../src/constants');

describe('Project Types', () => {
  it('should have a Survey for every ProjectType', () => {
    expect.assertions(projectTypes.length);
    projectTypes.forEach((type) => {
      expect(type).toHaveProperty('survey');
    });
  });

  it('should have a survey function for every ProjectType', () => {
    expect(projectTypes[0].survey).toEqual(expect.any(String));
  });
});
