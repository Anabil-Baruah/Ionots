const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Fetch all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Accept a project
router.post("/:id/accept", async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, { status: "accepted" });
  res.json(project);
});

module.exports = router;
