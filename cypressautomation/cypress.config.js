const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
        on('file:preprocessor', cucumber())
      
    },
    specPattern: 'cypress/integration/examples/*.js',
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
