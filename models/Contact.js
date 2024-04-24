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

User.sync()
  .then(() => {
    return Contact.sync();
  })
  .then(() => {
    console.log('Contact table synchronized successfully with the database!');
  })
  .catch((error) => {
    console.error('Unable to synchronize Contact table with the database:', error);
  });

Contact.belongsTo(User);

module.exports = Contact;
