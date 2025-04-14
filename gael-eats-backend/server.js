const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const submissionsRoute = require('./routes/submissions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/submissions', submissionsRoute);

app.get('/api/submissions/chefs-table', async (req, res) => {
    try {
      const submissions = await Submission.find({ station: 'Chefs Table' });
      res.json(submissions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
