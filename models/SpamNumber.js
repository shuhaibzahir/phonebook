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
  
 
module.exports = SpamNumber;
