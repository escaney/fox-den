const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Base directory of your Next.js app
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file
  testEnvironment: 'jest-environment-jsdom', // Next.js runs in the browser
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['@swc/jest'],
  },
  moduleNameMapper: {
    // Handle CSS imports (mocking styles)
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    // Handle module aliases (same as in tsconfig.json)
    '^@/(.*)$': '<rootDir>/src/$1',
    '^react$': '<rootDir>/node_modules/react',
    '^react-dom$': '<rootDir>/node_modules/react-dom',
  },
};

module.exports = createJestConfig(customJestConfig);