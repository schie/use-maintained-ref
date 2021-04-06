module.exports = {
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    modulePathIgnorePatterns: [
      '.yarn',
      '.npm',
      'ios/',
      'node_modules/',
      'android/',
      '<rootDir>/dist/',
      '<rootDir>/example/'
    ],
    testPathIgnorePatterns: [
      '\\.snap$',
      '<rootDir>/node_modules/',
      '<rootDir>/lib/',
      '<rootDir>/example/',
    ],
  };