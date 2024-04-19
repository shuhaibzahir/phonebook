const jwt = require('jsonwebtoken');
const ENVS = require("../config/env");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, ENVS.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
