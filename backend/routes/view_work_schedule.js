const express = require("express");
const router = express.Router();
const WorkSchedule = require("../models/work_schedule");

// get userId, selectedDays, and workTimes
router.get("/", (req, res) => {
  WorkSchedule.find()
    .select("userId selectedDays workTimes")
    .then((schedules) => {
      res.json(schedules);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).json({ message: "Server error", error: err.message });
    });
});

module.exports = router;

