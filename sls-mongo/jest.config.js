/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
    '^~libs(.*)$': '<rootDir>/src/libs$1',
    '^~services(.*)$': '<rootDir>/src/services$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
}
