'use strict';

const bodyParser = require('body-parser');

const config = require('../config');
const api = require('../api');

/**
 * Configure the Express app with default configuration
 *
 * @export
 * @param {Express} app application
 * @returns {Object} Configured Express application
 */
function configure(app) {
  /**
   * Hello world !
   */
  app.get('/', (req, res) => res.send('Hello World!'));

  /**
   * Heartbeat activation
   */
  app.get('/heartbeat', (req, res) =>
    res.status(200).json({
      state: 'up',
    }),
  );

  /** Body parser */
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  /** Set-up routes */
  api(app);

  /**  App configuration. */
  app.set('port', config.port);

  return app;
}

module.exports = {
  configure,
};
