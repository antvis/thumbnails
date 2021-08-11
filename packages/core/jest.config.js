import base from '../../jest.config';

module.exports = {
  ...base,
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  testRegex: '(/__tests__/.*\\.(test|spec))\\.ts$',
};
