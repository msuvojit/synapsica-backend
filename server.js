const express = require('express');
const connectDB = require('./config/db');
const app = express();
const accessControlAllow = require('./middleware/accessControlAllow');
const cors = require('cors');
const serverless = require('serverless-http');

const calculatorRoute = require('./routes/api/calculator');

require('dotenv').config();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use(accessControlAllow.allow);

// Define Routes
app.use('/api/calculator', calculatorRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports.handler = serverless(app);
