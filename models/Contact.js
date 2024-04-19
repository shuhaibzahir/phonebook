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

Contact.belongsTo(User);

module.exports = Contact;
