const pack = require('./package');

module.exports = {
  // ...base,
  displayName: pack.name,
  name: pack.name,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  rootDir: '.',
  automock: false,
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  transformIgnorePatterns: [
    '../../node_modules/(?!@ez-dux/core|@ez-dux/react)',
  ],
  collectCoverage: true,
};
