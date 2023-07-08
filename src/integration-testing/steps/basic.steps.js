// Import the cucumber operators we need
const { Before, Given, When, Then, After } = require("@cucumber/cucumber");
const assert = require("assert");
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
Then('click on the Home Button', function () {
  // Write code here that turns the phrase above into concrete actions
  expect("").to.be.equal('')
});