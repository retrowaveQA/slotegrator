import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './cases/*/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      windowSize: '640x640',
    },
  },
  plugins: {
    pauseOnFail: {},  
  },
  include: {
    I: './steps_file.js',
  },
  name: 'auto-sltgrtr',
  screenshotOnFail: {
      enabled: true,
    },
}
