const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/progress", progressRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
