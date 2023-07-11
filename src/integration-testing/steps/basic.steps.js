// Import the cucumber operators we need
const { Before, Given, When, Then, After } = require("@cucumber/cucumber");
<<<<<<< Updated upstream:src/integration-testing/steps/basic.steps.js
const assert = require("assert");
=======
>>>>>>> Stashed changes:integraton-testing/step_definitions/basic.steps.js
const { HomePage } = require("../pages/home.po");

var chai = require("chai");
var expect = chai.expect;

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var expect = chai.expect;

Before(function (scenario, callback) {
  this.homepage = new HomePage();

  callback();
});

Given("I go to {string}", function (string) {
  this.homepage.navigateToHome();

  expect(browser.getCurrentUrl()).to.eventually.equal("http://localhost:8080");
});
Then("click on the Home Button", function () {
<<<<<<< Updated upstream:src/integration-testing/steps/basic.steps.js
  // Write code here that turns the phrase above into concrete actions
  expect("").to.be.equal("");
=======
  browser
    .waitForElementVisible("#homeContent")
    .click("#homeContent")
    .screenshot()
    .end();
  //expect(" ").to.be.equal("");
>>>>>>> Stashed changes:integraton-testing/step_definitions/basic.steps.js
});
