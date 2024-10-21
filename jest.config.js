/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"], // Adjust based on where your source files are
  testMatch: ["**/__tests__/**/*.(spec|test).ts?(x)", "**/?(*.)+(spec|test).ts?(x)"], // Adjust as needed
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Make sure to include backslashes for proper regex
  },
};
