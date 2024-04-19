const Sequelize = require('sequelize');
const ENVS = require("./env");

// Create connection to the database
const sequelize = new Sequelize(ENVS.DB_NAME, ENVS.DB_USER_NAME, ENVS.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;