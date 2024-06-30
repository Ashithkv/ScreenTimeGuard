const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow all origins for simplicity (adjust based on deployment needs)

// Routes
const userRoutes = require("./routes/create_user");
const workScheduleRoutes = require("./routes/create_work_schedule");
const appTimeLimitRoutes = require("./routes/create_app_time_limit");

app.use("/api/users", userRoutes);
app.use("/api/work-schedule", workScheduleRoutes);
app.use("/api/app-time-limit", appTimeLimitRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/social_media_controller_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("Internal Server Error");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
