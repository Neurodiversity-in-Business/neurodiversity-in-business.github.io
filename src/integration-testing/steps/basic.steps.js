// Import the cucumber operators we need
const { Before, Given,When, Then, After } = require('@cucumber/cucumber');
const assert = require('assert');


  Given('I go to {string}', function (string) {
    assert.equal('', '')
  });