cypress.config.js 

const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder')
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1500,
  reporter: 'cypress-mochawesome-reporter', 

  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
      require('cypress-mochawesome-reporter/plugin')(on) 
      on('task', { removeDirectory })
      require('@cypress/grep/src/plugin')(config);
      return config; 
    },
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    experimentalStudio: true
  },
});