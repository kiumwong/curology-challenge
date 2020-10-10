const path = require('path');
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
  web: {
    port: 5678
  },
  logging: {
    appenders: [
      { type: 'console' },
      { type: 'file', filename: logPath }
    ]
  }
};

