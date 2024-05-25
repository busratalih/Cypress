 
const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder')
const { allureCypress } = require("allure-cypress/reporter");
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1500,
  reporter: 'cypress-mochawesome-reporter', 
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })
      on("task", {
        lighthouse: lighthouse()
      })
      allureCypress(on);
      require('cypress-mochawesome-reporter/plugin')(on) 
      on('task', { removeDirectory })
      require('@cypress/grep/src/plugin')(config);
      return config; 
      
    },
    baseUrl: process.env.URL,
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    experimentalStudio: true,
  },
});