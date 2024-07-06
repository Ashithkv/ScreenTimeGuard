const express = require('express');
const router = express.Router();
const WorkSchedule = require('../models/work_schedule');

// function to add 6 hours to a Date object(utc)
function addSixHours(date) {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 6);
  return newDate;
}

// Get userId, selectedDays, and workTimes
router.get('/', (req, res) => {
  WorkSchedule.find()
    .select("userId selectedDays workTimes")
    .then((schedules) => {
      // Adjust workTimes by adding 6 hours
      const adjustedSchedules = schedules.map(schedule => ({
        userId: schedule.userId,
        selectedDays: schedule.selectedDays,
        workTimes: schedule.workTimes.map(time => ({
          startTime: addSixHours(time.startTime),
          endTime: addSixHours(time.endTime),
        })),
      }));
      res.json(adjustedSchedules);
    })
    .catch((err) => {
      console.error(err.message);
      res.json({ message: "Server error", error: err.message });
    });
});

module.exports = router;
