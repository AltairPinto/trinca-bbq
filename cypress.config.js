const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
