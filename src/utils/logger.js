const winston = require('winston');

const loggerLevel = process.env.LOGGER_LEVEL || 'info';

const config = {
  level: loggerLevel,
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'application.log' })],
};

// Logger instance:
const logger = winston.createLogger(config);

module.exports = logger;
