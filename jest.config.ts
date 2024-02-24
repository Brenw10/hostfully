export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
    '^.+\\.(js|jsx)$': 'babel-jest',
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!nanoid)"
  ]
};
