const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  status: { type: String, enum: ["assigned", "accepted", "completed"], default: "assigned" },
});

module.exports = mongoose.model("Project", ProjectSchema);
