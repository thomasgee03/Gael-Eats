const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Submission = require('./models/Submission');

require('dotenv').config();

const submissionsRoute = require('./routes/submissions');

const app = express();

app.use(cors({
  origin: 'https://thomasgee03.github.io',
}));

app.use(express.json());

app.get('/wipe-now/:label', async (req, res) => {
  const label = req.params.label || 'Manual Wipe';
  await wipeSubmissions(label);
  res.send(`Submissions wiped at ${label}`);
});

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
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





