'use strict';

const { Router } = require('express');
const wrap = require('co-express');

const testController = require('./test/controller');

module.exports = function addRouter(app) {
  const router = Router();

  router.get('/test', wrap(testController.get));

  app.use('/api', router);
};
