
// const express = require("express");
// const router = express.Router();
// const WorkSchedule = require("../models/work_schedule");

// router.post("/", async (req, res) => {
//   const { userId, selectedDays, workTimes, blockedApps, nonWorkSchedule } =
//     req.body;

//   try {
//     const newSchedule = new WorkSchedule({
//       userId,
//       selectedDays,
//       workTimes,
//       blockedApps,
//       nonWorkSchedule,
//     });

//     await newSchedule.save();
//     res.json({ message: "Schedule set successfully" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const WorkSchedule = require('../models/work_schedule');

router.post('/', async (req, res) => {
  const { startTime, endTime, selectedDays, userId } = req.body;

  if (!userId) {
    return res.status(400).send({ error: "userId is required" });
  }

  const newWorkSchedule = new WorkSchedule({
    userId,
    selectedDays,
    workTimes: [{ startTime, endTime }]
  });

  try {
    const savedSchedule = await newWorkSchedule.save();
    res.status(201).send(savedSchedule);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
