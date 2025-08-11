/**
 * Jest configuration for the Next.js project.
 * Uses ts-jest for TypeScript support and @testing-library/jest-dom for DOM assertions.
 */
module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
