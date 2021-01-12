/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
    '^~libs(.*)$': '<rootDir>/src/libs$1',
    '^~services(.*)$': '<rootDir>/src/services$1',
  },
}
