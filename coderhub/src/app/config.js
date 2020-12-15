// npm install dotenv
const dotenv = require('dotenv');

dotenv.config()

// console.log(process.env.APP_PORT);

// const { APP_PORT } = process.env;

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE, 
  MYSQL_USER,
  MYSQL_PASSWORD 

} = process.env