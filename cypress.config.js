const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder')

module.exports = defineConfig({
  projectId: 'kddkns',
  viewportHeight:1000,
  viewportWidth:1500,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { removeDirectory })

      require('@cypress/grep/src/plugin')(config);
      return config
    },
    specPattern:'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    experimentalStudio: true
  },
});
