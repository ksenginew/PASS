/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@passlang/(.*?)$": "<rootDir>/packages/$1/src",
    passlang: "<rootDir>/packages/passlang/src",
    "pass-loader": "<rootDir>/packages/pass-loader/src",
    "rollup-plugin-pass": "<rootDir>/packages/rollup-plugin-pass/src",
  },
  rootDir: __dirname,
};
