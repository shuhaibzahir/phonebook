const SpamNumber = require('../models/SpamNumber');

const updateSpamNumber = async (req, res) => {
  try {
    const { phoneNumber, isSpam = true} = req.body;

    // Create or update spam entry and isSpam is default value true : and you can change it with false
    await SpamNumber.upsert({ phoneNumber, isSpam }, { setDefaultsOnInsert: true });

    // Return success message
    res.status(200).json({ message: 'Number marked as spam successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
    updateSpamNumber,
};
