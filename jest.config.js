const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
  moduleNameMapper: {
    '/^styles/(.*)': '<rootDir>/styles/$1',
    '/^utils/(.*)': '<rootDir>/src/utils/$1',
    '/^features/(.*)': '<rootDir>/src/features/$1',
    '/^components/(.*)': '<rootDir>/src/components/$1',
  },
  collectCoverage: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.ts?(x)', '!src/pages/**', '!src/features/**'],
  coverageDirectory: 'coverage',
};

module.exports = createJestConfig(customJestConfig);
