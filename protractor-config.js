exports.config = {
  // set to "custom" instead of cucumber.
  framework: "custom",
  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  // require feature files
  specs: [
    "./src/integration-testing/specs/*.feature", // accepts a glob
  ],
  baseURL: "http://localhost:8080/",
  cucumberOpts: {
    // require step definitions
    require: [
      "./src/integration-testing/steps/*.steps.js", // accepts a glob
    ],
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"), // Relative path of tsconfig.json file
    });
  },
};
