var config = require('../../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Automation practice Titile assertion': function(browser) {
    browser
      .url('http://automationpractice.com/index.php')
      .waitForElementVisible('body')
      .assert.title('My Store')
      //.saveScreenshot('automation-practice.png')
      .end();
  }
};