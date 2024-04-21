const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const SpamNumber = sequelize.define('spamNumber', {
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    isSpam: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Default value is true (marked as spam)
    },
  });
  
  sequelize.sync()
  .then(() => {
    console.log('Spam Number table synchronized successfully with the database!');
  })
  .catch((error) => {
    console.error('Unable to synchronize spam number table with the database:', error);
    // Throw or handle the error appropriately
  });
module.exports = SpamNumber;
