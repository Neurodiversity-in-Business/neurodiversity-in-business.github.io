// Import the cucumber operators we need
const { Before, Given, Then, When } = require("@cucumber/cucumber");
const { HomePage } = require("../pages/home.po");

Before(function (scenario, callback) {
  this.homepage = new HomePage();

  callback();
});

Given("I go to {string}", function (string) {
  return this.homepage.navigateTo(string);
});

When('I click on the Skip to Content link', function () {
  browser.perform(function () {
    const actions = this.actions();
    actions.click("#skipLink");
  });
});

Then("the first header has focus", async function () {
  browser.perform(function () {
    return  this.waitForElementPresent("#pageHeader")
      .element("#pageHeader")
      .expect.isSelected();

  });
});
