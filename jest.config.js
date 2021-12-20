const project = require('./project.json');

module.exports = {
  collectCoverageFrom: project.tests.source.files,
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@src\/(.*)$': `<rootDir>/${project.source.root}$1`,
    '@environment$': `<rootDir>/${project.environments.source.root}/development.js`
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  transform: {
    '\\.(jpg|png|svg)$': `<rootDir>/${project.source.root}/base/mocks/image-file.js`,
    '^.+\\.js$': 'babel-jest'
  }
};
