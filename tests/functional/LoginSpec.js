var config = require('../../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Verify success login': function(browser) {
    browser
      .init()
      .maximizeWindow()
      .waitForElementVisible('body')
      .click('.login')
      .setValue('#email','tester100@test.com')
      .setValue('#passwd','test123')
      .click('#SubmitLogin')
      .waitForElementVisible('body')
      .click('.logout')
      .end();
  }
};