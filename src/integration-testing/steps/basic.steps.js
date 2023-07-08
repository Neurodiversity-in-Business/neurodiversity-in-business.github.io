// Import the cucumber operators we need
const { Before, Given,When, Then, After } = require('cucumber');
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');
const {Homepage} = require("../pages/home.po.js");

let page=null;
Before(() => {
    let page = new Homepage();
});
Given('I am on the home page', function () {
  // Navigate to home page.
   page.get();
   return 'pending';
});
/*When("I click on the increment button {int} times", async (x: number) => {
  // Click on the increment button x times.
  const incrementButton = element(by.id("increment"));
  for (let index = 0; index < x; index++) {
    await incrementButton.click();
  }
});
Then("The counter should show {string}", async (x: string) => {
  // Expect that we get the correct value showing
  expect(await element(by.id("counter")).getText()).to.equal(x);
});*/