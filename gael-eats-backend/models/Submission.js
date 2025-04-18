const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  station: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^[A-Za-z0-9._%+-]+@stmarys-ca\.edu$/, 'Invalid email domain'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  foodItem: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt

module.exports = mongoose.model('Submission', SubmissionSchema);
