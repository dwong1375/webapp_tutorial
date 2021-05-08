const dotenv = require('dotenv'); //stores sensitive info (private keys) and port
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};