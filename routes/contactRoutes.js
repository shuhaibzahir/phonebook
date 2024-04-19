const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/", contactController.addContact);
router
  .route("/:id")
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
