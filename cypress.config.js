const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   /// baseUrl:'http://lojaebac.ebaconline.art.br/#',
   baseUrl: 'http://lojaebac.ebaconline.art.br/',
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
