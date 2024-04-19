const { Op } = require('sequelize');
const User = require('../models/User');
const Contact = require('../models/Contact');
const SpamNumber = require('../models/SpamNumber');

const searchByName = async (req, res) => {
  try {
    const { name } = req.query;

    // Search users by name
    const users = await User.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ['id', 'name', 'phoneNumber'],
    });

    // Search contacts by name
    const contacts = await Contact.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ['id', 'name', 'phoneNumber'],
    });

    // Combine and return results
    const results = users.concat(contacts);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const searchByPhoneNumber = async (req, res) => {
  try {
    const { phoneNumber } = req.params;

    // Search user by phone number
    const user = await User.findOne({
      where: { phoneNumber },
      attributes: ['id', 'name', 'phoneNumber', 'email'],
    });

    // If user not found, search spam numbers
    if (!user) {
      const spamNumbers = await SpamNumber.findAll({
        where: { phoneNumber, isSpam: true},
        attributes: ['id', 'phoneNumber', 'isSpam'],
      });
      res.status(200).json(spamNumbers);
    } else {
      res.status(200).json([user]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  searchByName,
  searchByPhoneNumber,
};
