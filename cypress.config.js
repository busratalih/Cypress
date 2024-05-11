const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kddkns',
  viewportHeight:1000,
  viewportWidth:1600,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/**/*.{js, jsx, ts, tsx}'
  },
});
