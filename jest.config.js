/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.test.ts"], // this tells jest where to find our tests
  verbose: true, // if true, reports on all tests
  forceExit: true, // always want tests to exit, even if pending handlers
  // clearMocks: true, 
};