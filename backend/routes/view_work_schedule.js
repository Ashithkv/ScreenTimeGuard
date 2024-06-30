const express = require("express");
const router = express.Router();
const WorkSchedule = require("../models/work_schedule");

// GET userId, selectedDays, and workTimes
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

// const express = require("express");
// const router = express.Router();
// const WorkSchedule = require("../models/work_schedule");

// // GET all schedules
// router.get("/", async (req, res) => {
//   try {
//     const schedules = await WorkSchedule.find();
//     res.json(schedules);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

// module.exports = router;
