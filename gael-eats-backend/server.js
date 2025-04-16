const express = require('express');
const mongoose = require('mongoose'); // Keep this at the top
const cors = require('cors');
const Submission = require('./models/Submission');
require('dotenv').config();

const submissionsRoute = require('./routes/submissions');

const app = express();

// CORS configuration
app.use(cors({
  origin: 'https://thomasgee03.github.io',
}));

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Submissions route
app.use('/api/submissions', submissionsRoute);

// Chefs Table route
app.get('/api/submissions/chefs-table', async (req, res) => {
  try {
    const submissions = await Submission.find({ station: "Chefs Table" });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// MongoDB connection
const connectDB = async () => {
  try {
    console.log('Attempting MongoDB connection with URI:', process.env.MONGO_URI ? 'Set' : 'Undefined');
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit if connection fails
  }
};
connectDB();

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


