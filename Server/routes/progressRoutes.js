const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// Update progress and calculate score
router.patch("/:userId", async (req, res) => {
  const { projectId, progress } = req.body;

  const score = progress * 10; // Example scoring logic

  const updatedProgress = await Progress.findOneAndUpdate(
    { userId: req.params.userId, projectId },
    { progress, score },
    { new: true, upsert: true }
  );

  res.json(updatedProgress);
});

module.exports = router;
