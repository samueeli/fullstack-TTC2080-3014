const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db.js');
const logger = require('./middleware/logger.js');

connectDB();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// init logger middleware
app.use(logger);

// Users routes
app.use('/users', require('./routes/usersRoutes.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
