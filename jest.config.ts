export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
