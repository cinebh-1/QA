const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //A glob pattern String or Array of glob pattern Strings of the spec files to load. 
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
