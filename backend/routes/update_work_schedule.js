const express = require("express");
const router = express.Router();
const WorkSchedule = require("../models/work_schedule");

function convertTimeStringToDate(timeString) {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  return date;
}

/* GET users listing. */
router.put('/', function (req, res, next) {
  // var work_schedule_id = req.body.work_schedule_id
  const { userId, selectedDays, workTimes, blockedApps, nonWorkSchedule } = req.body;
  
  console.log("user id", userId)
  
  WorkSchedule.find({ userId: userId })
      .then(updateWorkSchedule => {
          console.log(updateWorkSchedule)

          if (selectedDays !== undefined) {
              WorkSchedule.updateMany({ userId: userId }, { $set: { selectedDays: selectedDays } })
                  .then(data3 => {
                      // res.json({ message: "successfully updated selectedDays" });
                  })
                  .catch(error => {
                      // res.json({ message: error })
                  })
          }
          if (workTimes !== undefined) {
            workTimes = workTimes.map(time => ({
              startTime: convertTimeStringToDate(time.startTime),
              endTime: convertTimeStringToDate(time.startTime)
            }));
    
            WorkSchedule.updateMany({ userId: userId }, { $set: { workTimes: workTimes } })
              .then(data3 => {
                // res.json({ message: "successfully updated workTimes" });
                console.log("Work Time", data3)
              })
              .catch(error => {
                // res.json({ message: error })
              });
          }
          if (blockedApps) {
              WorkSchedule.updateMany({ userId: userId },{ $set: { blockedApps: blockedApps } })
                  .then((data3) => {
                      // res.json({ message: "successfully updated name" });
                  })
                  .catch((error) => {
                      // res.json({ message: error });
                  });
          }
          if (nonWorkSchedule !== undefined) {
              WorkSchedule.updateMany({ userId: userId }, { $set: { nonWorkSchedule: nonWorkSchedule } })
                  .then(data3 => {
                      // res.json({ message: "successfully updated selectedDays" });
                  })
                  .catch(error => {
                      // res.json({ message: error })
                  })
          }
          res.json({ message: "Succesfully updated" })
      })
      .catch(error => {
          console.log(error)
          res.json({ message: "invalid Id" })
      })


});

module.exports = router;



