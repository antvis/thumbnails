module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/__tests__/.*\\.(test|spec))\\.ts$',
  verbose: false,
};
