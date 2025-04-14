const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  station: String,
  email: {
    type: String,
    required: true,
    match: [/^[A-Za-z0-9._%+-]+@stmarys-ca\.edu$/, 'Invalid email domain'],
  },
  rating: Number,
  foodItem: String,
  message: String,
});

module.exports = mongoose.model('Submission', SubmissionSchema);
