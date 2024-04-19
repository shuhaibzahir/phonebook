const faker = require('faker');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Contact = require('../models/Contact');
const SpamNumber = require('../models/SpamNumber');
const sequelize = require('../config/db');

const populateDatabase = async () => {
  try {
    // Sync models with database
    await sequelize.sync({ force: true });

    // Generate random users
    const users = [];
    for (let i = 0; i < 10; i++) {
      const name = faker.name.findName();
      const phoneNumber = faker.phone.phoneNumber();
      const email = faker.internet.email();
      const password = await bcrypt.hash('password', 10);
      users.push({ name, phoneNumber, email, password });
    }

    // Create users
    const createdUsers = await User.bulkCreate(users, { returning: true });

    // Generate random contacts for each user
    for (const user of createdUsers) {
      const contacts = [];
      for (let i = 0; i < 5; i++) {
        const name = faker.name.findName();
        const phoneNumber = faker.phone.phoneNumber();
        contacts.push({ name, phoneNumber, userId: user.id });
      }
      await Contact.bulkCreate(contacts);
    }

    // Generate random spam numbers
    const spamNumbers = [];
    for (let i = 0; i < 10; i++) {
      const phoneNumber = faker.phone.phoneNumber();
      spamNumbers.push({ phoneNumber});
    }
    await SpamNumber.bulkCreate(spamNumbers);

    console.log('Database populated successfully');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

populateDatabase();
