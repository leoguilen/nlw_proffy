module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  testMatch: ['<rootDir>/src/useCases/**/*.spec.ts'],
  collectCoverageFrom: [
    '!<rootDir>/src/useCases/**/*.spec.ts'
  ]
};