const express = require('express');
     const router = express.Router();
     const Submission = require('../models/Submission');

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
