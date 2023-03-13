const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  collectCoverage: true,
  reporters: [
    "default",
    [
      "jest-junit",
      {
        usePathForSuiteName: true,
        outputDirectory: "coverage",
      },
    ],
  ],
  coverageReporters: ["text", "cobertura"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@/controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@/modules/(.*)$": "<rootDir>/src/modules/$1",
    axios: "axios/dist/node/axios.cjs",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
