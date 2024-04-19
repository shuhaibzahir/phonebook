const Contact = require('../models/Contact');

const addContact = async (req, res) => {
  try {
    const { name, phoneNumber } = req.body;
    const userId = req.userId;

    // Create new contact
    const newContact = await Contact.create({ name, phoneNumber, userId });

    res.status(201).json({ message: 'Contact added successfully', contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phoneNumber } = req.body;

    await Contact.update({ name, phoneNumber }, { where: { id } });

    res.status(200).json({ message: 'Contact updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete contact
    await Contact.destroy({ where: { id } });

    // Return success message
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addContact,
  updateContact,
  deleteContact,
};
