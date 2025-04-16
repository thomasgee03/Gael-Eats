const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// Route to get all submissions
router.get('/', async (req, res) => {
  try {
    const submissions = await Submission.find();
    console.log('Fetched submissions:', submissions);
    res.json(submissions);
  } catch (err) {
    console.error('Error fetching submissions:', err);
    res.status(500).json({ message: err.message });
  }
});

// Route to get submissions for Chef's Table
router.get("/chef's-table", async (req, res) => {
  try {
    const submissions = await Submission.find({ station: "Chef's Table" });
    console.log("Chef's Table submissions:", submissions);
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching Chef's Table:", err);
    res.status(500).json({ message: err.message });
  }
});

// Route to get submissions for Clean Plates
router.get("/clean-plates", async (req, res) => {
  try {
    const submissions = await Submission.find({ station: "Clean Plates" });
    console.log("Clean Plates submissions:", submissions);
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching Clean Plates:", err);
    res.status(500).json({ message: err.message });
  }
});

// Route to get submissions for Central Oven
router.get("/central-oven", async (req, res) => {
  try {
    const submissions = await Submission.find({ station: "Central Oven" });
    console.log("Central Oven submissions:", submissions);
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching Central Oven:", err);
    res.status(500).json({ message: err.message });
  }
});

// Route to get submissions for Black Label Grill
router.get("/black-label-grill", async (req, res) => {
  try {
    const submissions = await Submission.find({ station: "Black Label Grill" });
    console.log("Black Label Grill submissions:", submissions);
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching Black Label Grill:", err);
    res.status(500).json({ message: err.message });
  }
});

// Route to get submissions for WildFlour
router.get("/wildflour", async (req, res) => {
  try {
    const submissions = await Submission.find({ station: "WildFlour" });
    console.log("WildFlour submissions:", submissions);
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching WildFlour:", err);
    res.status(500).json({ message: err.message });
  }
});

// Post a new submission
router.post('/', async (req, res) => {
  try {
    const submission = new Submission(req.body);
    await submission.save();
    console.log('Saved submission:', submission);
    res.status(201).json(submission);
  } catch (err) {
    console.error('Error saving submission:', err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

