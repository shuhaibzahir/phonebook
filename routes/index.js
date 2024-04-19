const express = require("express");
const route = express.Router();
const contactRoutes = require("./contactRoutes");
const spamRoutes = require("./spamRoutes");
const searchRoutes = require("./searchRoutes");
const authMiddleware = require("../middlewares/auth");

// in this file we are importing all routes and we are exporting them
// and giving its path, so no need to add it in routes file

route.use("/contacts",authMiddleware,contactRoutes);
route.use("/spam",authMiddleware,spamRoutes);
route.use("/search",authMiddleware,searchRoutes);

module.exports = route;
