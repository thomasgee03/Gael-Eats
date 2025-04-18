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

// Route to get submissions for Chef's Table with optional timestamp filter
router.get("/chef's-table", async (req, res) => {
  try {
    const { after } = req.query;
    const query = { station: "Chef's Table" };
    if (after) {
      query.createdAt = { $gt: new Date(after) };
    }
    const submissions = await Submission.find(query);
    console.log("Chef's Table submissions:", submissions);
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching Chef's Table:", err);
    res.status(500).json({ message: err.message });
  }
});

// Route to delete all submissions (secured with API key)
router.delete('/', async (req, res) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const result = await Submission.deleteMany({});
    console.log(`[${new Date().toLocaleString()}] Wiped ${result.deletedCount} submissions across all stations.`);
    res.json({ message: 'All submissions wiped successfully', deletedCount: result.deletedCount });
  } catch (err) {
    console.error("Error wiping submissions:", err);
    res.status(500).json({ message: err.message });
  }
});

// Route to get submissions for Clean Plates
router.get("/clean-plates", async (req, res) => {
  try {
    const { after } = req.query;
    const query = { station: "Clean Plates" };
    if (after) {
      query.createdAt = { $gt: new Date(after) };
    }
    const submissions = await Submission.find(query);
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
    const { after } = req.query;
    const query = { station: "Central Oven" };
    if (after) {
      query.createdAt = { $gt: new Date(after) };
    }
    const submissions = await Submission.find(query);
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
    const { after } = req.query;
    const query = { station: "Black Label Grill" };
    if (after) {
      query.createdAt = { $gt: new Date(after) };
    }
    const submissions = await Submission.find(query);
    console.log("Black Label Grill submissions:", submissions);
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching Black Label Grill:", err);
    res.status(500).json({ message: err.message });
  }
});

// Route to get submissions for WildFlour
router.get("/wild-flour", async (req, res) => {
  try {
    const { after } = req.query;
    const query = { station: "WildFlour" };
    if (after) {
      query.createdAt = { $gt: new Date(after) };
    }
    const submissions = await Submission.find(query);
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

