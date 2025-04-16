const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');
const Submission = require('./models/Submission');

require('dotenv').config();

const submissionsRoute = require('./routes/submissions');

const app = express();

app.use(cors({
  origin: 'https://thomasgee03.github.io',
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.use('/api/submissions', submissionsRoute);

// ✅ Wipe function (define it outside connectDB)
const wipeSubmissions = async (label) => {
  try {
    const result = await Submission.deleteMany({});
    console.log(`[${new Date().toLocaleString()}] (${label}) Wiped ${result.deletedCount} submissions.`);
  } catch (err) {
    console.error(`[${new Date().toLocaleString()}] (${label}) Error wiping submissions:`, err);
  }
};

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI ? 'Set' : 'Undefined');
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');

    // ⏰ Cron jobs (place after MongoDB is connected)
    cron.schedule('30 10 * * 1-5', () => wipeSubmissions('10:30am M-F'));
    cron.schedule('0 14 * * 1-5', () => wipeSubmissions('2:00pm M-F'));
    cron.schedule('0 20 * * 1-6', () => wipeSubmissions('8:00pm M-Sat'));
    cron.schedule('0 23 * * 0,1,2,3,4', () => wipeSubmissions('11:00pm Sun-Thu'));
    cron.schedule('30 13 * * 0,6', () => wipeSubmissions('1:30pm Sat-Sun'));

  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




