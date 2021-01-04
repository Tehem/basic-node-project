const http = require('http');
const express = require('express');

const logger = require('../utils/logger');

const { configure } = require('./config/express');

let app;
let server;

/**
 * Start the web app.
 *
 * @returns {Promise} when app end to start
 */
async function start() {
  if (app) {
    return app;
  }

  logger.info('Express web server creation');
  app = configure(express());
  server = http.createServer(app);
  await server.listen(app.get('port'));

  logger.info('✔ Server running 🍺', {
    port: server.address().port,
    environment: process.env.NODE_ENV,
  });

  return app;
}

/**
 * Stop the web app.
 *
 * @returns {Promise} when app end to start
 */
async function stop() {
  if (server) {
    await server.close();
    server = null;
    app = null;
  }
  return Promise.resolve();
}

if (!module.parent) {
  start();
}

module.exports = {
  start,
  stop,
  get server() {
    return server;
  },
  get app() {
    return app;
  },
};
