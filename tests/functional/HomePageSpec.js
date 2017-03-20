var config = require('../../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Automation practice Titile assertion': function(browser) {
    browser
      .init()
      .maximizeWindow()
      .waitForElementVisible('body')
      .assert.title('My Store')
      //.saveScreenshot('automation-practice.png')
      .end();
  }
};