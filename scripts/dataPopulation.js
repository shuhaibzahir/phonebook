 
const User = require('../models/User');
const Contact = require('../models/Contact');
const SpamNumber = require('../models/SpamNumber');
const sequelize = require('../config/db');
const {users,contancts,spamNumbers} = require('./data');
const populateDatabase = async () => {
  try {
    // Sync models with database
    await sequelize.sync({ force: true });
 

    // Create users
    const createdUsers = await User.bulkCreate(users, { returning: true });

    // Generate random contacts for each user
    for (const user of createdUsers) {
      await Contact.bulkCreate(contancts.slice( Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)));
    }

    await SpamNumber.bulkCreate(spamNumbers);

    console.log('Database populated successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error populating database:', error);
    process.exit(1);
  }
};

populateDatabase();
