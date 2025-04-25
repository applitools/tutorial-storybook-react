module.exports = {
  apiKey: process.env.APPLITOOLS_API_KEY,
  serverUrl: 'https://eyes.applitools.com',
  batchName: 'Storybook React Tutorial',
  testConcurrency: 10,
  showLogs: false,
  browser: [
    { width: 1024, height: 768, name: 'chrome' }, // See https://applitools.com/tutorials/sdks/storybook/browsers for additional supported browsers and devices.
    // { width: 1024, height: 768, name: 'firefox' },
    // { chromeEmulationInfo: { deviceName: 'Galaxy S20' } },
 ] 
}
