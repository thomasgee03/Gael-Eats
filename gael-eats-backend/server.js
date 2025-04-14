const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Submission = require('./models/Submission');
require('dotenv').config();

const submissionsRoute = require('./routes/submissions');

const app = express();

// CORS configuration to allow your GitHub Pages frontend to interact with the backend
app.use(cors({
  origin: 'https://thomasgee03.github.io', // Adjusted URL for GitHub Pages
}));

// Middleware to parse JSON
app.use(express.json());

// Root route handler for basic "server is running" message
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Submissions route handler
app.use('/api/submissions', submissionsRoute);

// Specific route for "Chefs Table" submissions
app.get('/api/submissions/chefs-table', async (req, res) => {
  try {
    const submissions = await Submission.find({ station: 'Chefs Table' });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Server listening on a dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

