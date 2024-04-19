const express = require('express');
const authRoutes = require('./routes/authRoutes');
const routes = require('./routes');
const ENVS = require("./config/env");

const app = express();

// Middleware fo rparsing JSON bodies 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/auth', authRoutes);
app.use('/api', routes);

// here handling the error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

app.listen(ENVS.PORT, () => {
  console.log(`Server is running on port ${ENVS.PORT}`);
});
