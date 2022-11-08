const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './cases/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://test.react-back-office-app.netreportservice.xyz/admin/login',
      show: true,
      browser: 'chromium',
      windowSize: '640x640',
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
  },
  name: 'auto'
}