// See https://applitools.com/docs/eyes/sdks/storybook/api/configuration for additional configuration properties.
/**
 * @type {import('@applitools/eyes-storybook').ApplitoolsConfig}
 **/

module.exports = {
  apiKey: process.env.APPLITOOLS_API_KEY,
  serverUrl: 'https://eyes.applitools.com',
  batchName: 'Storybook React Tutorial',
  showLogs: false,
  browser: [ // See https://applitools.com/docs/eyes/sdks/storybook/api/browsers for additional supported browsers and devices.
    { width: 1024, height: 768, name: 'chrome' },
    // { width: 1024, height: 768, name: 'firefox' },
    // { chromeEmulationInfo: { deviceName: 'Galaxy S20' } },
 ],
 puppeteerOptions: process.env.GITHUB_ACTIONS
  ? {
      executablePath: '/usr/bin/chromium', 
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  : undefined, 
}
