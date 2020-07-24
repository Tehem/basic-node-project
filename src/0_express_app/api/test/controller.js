'use strict';

const HttpStatus = require('http-status-codes');
const logger = require('chpr-logger');

// eslint-disable-next-line require-await
async function get(req, res) {
  const { name } = req.query;
  logger.info('[test#get] query', req.query);

  if (name === undefined) {
    logger.info('[test#get] Error: no name');
    return res.sendStatus(HttpStatus.BAD_REQUEST);
  }

  const helloWorld = `Hello ${name} !`;
  return res.send(helloWorld);
}

module.exports = {
  get,
};
