const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  clearMocks: true,
  roots: [
    './src',
  ],
  collectCoverageFrom: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
    '!./**/*.d.ts',
  ],
  coverageDirectory: './.build/coverage',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@iherbscs)',
  ],
  slowTestThreshold: 10 * 1000,
};
