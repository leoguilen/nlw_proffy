module.exports = {
  rootDir: '.',
  testMatch: ['<rootDir>/src/useCases/**/*.spec.ts'],
  collectCoverageFrom: [
    '!<rootDir>/src/useCases/**/*.spec.ts'
  ]
};