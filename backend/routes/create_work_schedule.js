const express = require('express');
const router = express.Router();
const WorkSchedule = require('../models/work_schedule');

// function to convert HH:mm string to Date object
function convertTimeStringToDate(timeString) {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  return date;
}

router.post('/', async (req, res) => {
  const { userId, selectedDays, workTimes } = req.body;

  if (!userId) {
    return res.json({ error: "Missing required fields" });
  }
  console.log("user _id______:", userId)

  const newWorkSchedule = new WorkSchedule({
    userId,
    selectedDays,
    workTimes: workTimes.map(time => ({
      startTime: convertTimeStringToDate(time.startTime),
      endTime: convertTimeStringToDate(time.endTime)
    })),
  });

  newWorkSchedule.save()
    .then(savedSchedule => {
      console.log("data", savedSchedule);
      res.json({ message: "Successfully created work schedule", savedSchedule });
    })
    .catch(error => {
      console.log("Error saving work schedule:", error);
      res.json({ error: "Server error", message: error.message });
    });
});

module.exports = router;
