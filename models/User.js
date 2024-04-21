const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
sequelize.sync()
  .then(() => {
    console.log('User table synchronized successfully with the database!');
  })
  .catch((error) => {
    console.error('Unable to synchronize User table with the database:', error);
    // Throw or handle the error appropriately
  });
module.exports = User;
