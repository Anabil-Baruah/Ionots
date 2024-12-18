const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  progress: { type: Number, default: 0 }, // Percentage (0-100)
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model("Progress", ProgressSchema);
