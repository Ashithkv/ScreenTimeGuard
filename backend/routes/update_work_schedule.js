// routes/update_work_schedule.js

const express = require("express");
const router = express.Router();
const WorkSchedule = require("../models/work_schedule");

router.put("/:userId", async (req, res) => {
  const { selectedDays, workTimes, blockedApps, nonWorkSchedule } = req.body;
  const userId = req.params.userId;

  try {
    let schedule = await WorkSchedule.findOne({ userId });

    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    schedule.selectedDays = selectedDays;
    schedule.workTimes = workTimes;
    schedule.blockedApps = blockedApps;
    schedule.nonWorkSchedule = nonWorkSchedule;

    await schedule.save();

    res.json({ message: "Schedule updated successfully", schedule });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
