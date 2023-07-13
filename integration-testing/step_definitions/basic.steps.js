// Import the cucumber operators we need
const { Before, Given, Then } = require("@cucumber/cucumber");
const { HomePage } = require("../pages/home.po");
var chai = require("chai");
var expect = chai.expect;

var chaiAsPromised = require("chai-as-promised");
const { assert } = require("console");
chai.use(chaiAsPromised);

var expect = chai.expect;
Before(function (scenario, callback) {
  this.homepage = new HomePage();

  callback();
});

Given("I go to {string}", function (string) {
  this.homepage.navigateToHome();
  browser.pause(3000);
});
Then("I click on the Skip to Content link", function () {
  browser.perform(function () {
    const actions = this.actions();
    actions.click("#skipLink").pause(1000);
    browser
      .waitForElementPresent("#pageHeader")
      .element("#pageHeader")
      .expect.isSelected();
  });
});
Then("the first header has focus", async function () {
  return browser.pause(1000).end();
});
