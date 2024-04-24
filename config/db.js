const Sequelize = require('sequelize');
const ENVS = require("./env");

// Create connection to the database
console.log('Connecting to the database...');
const sequelize = new Sequelize(ENVS.DB_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Require SSL/TLS
      rejectUnauthorized: false // Ignore self-signed certificates
    }
  }
});
sequelize.authenticate()
.then(() => {
  console.log('Connection to the database has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Disable logging
sequelize.options.logging = false;

module.exports = sequelize;