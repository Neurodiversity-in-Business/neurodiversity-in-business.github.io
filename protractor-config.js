exports.config = {

  // set to "custom" instead of cucumber.
  framework: "custom",
  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  // require feature files
  specs: [
    "./src/integration-testing/specs/*.feature", // accepts a glob
  ],
  cucumberOpts: {
    // require step definitions
    require: [
      "./src/integration-testing/steps/*.steps.js", // accepts a glob
    ],
  },
};
