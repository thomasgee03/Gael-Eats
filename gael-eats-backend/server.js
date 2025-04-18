const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');
const Submission = require('./models/Submission');
require('dotenv').config();

const submissionsRoute = require('./routes/submissions');

const app = express();

app.use(cors({
  origin: ['https://thomasgee03.github.io', 'http://localhost:3000'], // Added localhost for dev
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.use('/api/submissions', submissionsRoute);

// Wipe all submissions for all stations
const wipeAllSubmissions = async (label) => {
  try {
    const result = await Submission.deleteMany({});
    console.log(`[${new Date().toLocaleString()}] (${label}) Wiped ${result.deletedCount} submissions across all stations.`);
  } catch (err) {
    console.error(`[${new Date().toLocaleString()}] (${label}) Error wiping submissions:`, err);
  }
};

// Schedule wipes at specified times (America/Los_Angeles timezone)
cron.schedule('30 10 * * 1-5', () => wipeAllSubmissions('10:30 AM Mon-Fri'), { timezone: 'America/Los_Angeles' });
cron.schedule('0 14 * * 1-5', () => wipeAllSubmissions('2:00 PM Mon-Fri'), { timezone: 'America/Los_Angeles' });
cron.schedule('0 20 * * 1-6', () => wipeAllSubmissions('8:00 PM Mon-Sat'), { timezone: 'America/Los_Angeles' });
cron.schedule('0 23 * * 0-4', () => wipeAllSubmissions('11:00 PM Mon-Thu,Sun'), { timezone: 'America/Los_Angeles' });
cron.schedule('30 13 * * 0,6', () => wipeAllSubmissions('1:30 PM Sat-Sun'), { timezone: 'America/Los_Angeles' });

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI ? 'Set' : 'Undefined');
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





