var SELENIUM_CONFIGURATION = {
    start_process: true,
    server_path: './node_modules/selenium-standalone/.selenium/selenium-server/3.4.0-server.jar',

};

var FIREFOX_CONFIGURATION = {
    browserName: 'firefox',
    javascriptEnabled: true,
    acceptSslCerts: true,
    marionette: true,

};

var CHROME_CONFIGURATION = {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true
};

var IE_CONFIGURATION = {
    browserName: 'internet explorer',
    javascriptEnabled: true,
    acceptSslCerts: true
};


var DEFAULT_CONFIGURATION = {

    launch_url: 'http://automationpractice.com/index.php',
    selenium_port: 4444,
    selenium_host: 'localhost',
    end_session_on_fail: true,
    skip_testcases_on_fail: false,
    desiredCapabilities: FIREFOX_CONFIGURATION,
    cli_args: {
        "webdriver.chrome.driver": "./node_modules/selenium-standalone/.selenium/chromedriver/2.30-x64-chromedriver",
        "webdriver.firefox.marionette": "./node_modules/selenium-standalone/.selenium/geckodriver/0.16.1-x64-geckodriver",
        "webdriver.edge.driver": "",
        "webdriver.ie.driver": "./node_modules/selenium-standalone/.selenium/iedriver/IEDriverServer.exe",
        "nightwatch-html-reporter": "-d /reports [--theme (default:'default')] [--output (default:generatedReport.html)]"
    },


};

var UAT_ENV_FIREFOX_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: FIREFOX_CONFIGURATION

});

var UAT_ENV_CHROME_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: CHROME_CONFIGURATION
});

var UAT_EN_INERNET_EXPLORER_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: IE_CONFIGURATION
});


var TEST_ENV_FIREFOX_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: FIREFOX_CONFIGURATION
});

var TEST_ENV_CHROME_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: CHROME_CONFIGURATION
});

var TEST_ENV_INTERNET_EXPLORER_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: IE_CONFIGURATION
});

var SIT_ENV_FIREFOX_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: FIREFOX_CONFIGURATION
});

var SIT_ENV_CHROME_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: CHROME_CONFIGURATION
});

var SIT_ENV_INTERNET_EXPLORER_CONFIGURATION = Object.assign({}, DEFAULT_CONFIGURATION, {
    launch_url: 'http://automationpractice.com/index.php',
    desiredCapabilities: IE_CONFIGURATION
});

var ENVIRONMENTS = {
    default: DEFAULT_CONFIGURATION,
    test_firefox: TEST_ENV_FIREFOX_CONFIGURATION,
    test_chrome: TEST_ENV_CHROME_CONFIGURATION,
    test_ie: TEST_ENV_INTERNET_EXPLORER_CONFIGURATION,
    uat_firefox: UAT_ENV_FIREFOX_CONFIGURATION,
    uat_chrome: UAT_ENV_CHROME_CONFIGURATION,
    uat_ie: UAT_EN_INERNET_EXPLORER_CONFIGURATION,
    sit_firefox:SIT_ENV_FIREFOX_CONFIGURATION,
    sit_chrome:SIT_ENV_CHROME_CONFIGURATION,
    sit_ie:SIT_ENV_INTERNET_EXPLORER_CONFIGURATION,

};

module.exports = {
    src_folders: ['tests'],
    selenium: SELENIUM_CONFIGURATION,
    test_settings: ENVIRONMENTS
};