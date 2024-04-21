const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Contact = sequelize.define('contact', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
sequelize.sync()
  .then(() => {
    console.log('Contact table synchronized successfully with the database!');
  })
  .catch((error) => {
    console.error('Unable to synchronize Contact table with the database:', error);
    // Throw or handle the error appropriately
  });
  
Contact.belongsTo(User);

module.exports = Contact;
