// const express = require("express");
// const router = express.Router();
// const Schedule = require("../models/work_schedule");

// router.post("/", async (req, res) => {
//   const { userId, day, workTimes, blockedApps, nonWorkSchedule } = req.body;

//   try {
//     const newSchedule = new Schedule({
//       userId,
//       day,
//       workTimes,
//       blockedApps,
//       nonWorkSchedule,
//     });

//     await newSchedule.save();
//     res.json({ message: "Schedule set successfully" });
//   } catch (err) {
//     console.error(err.message); // Log the error message
//     res.status(500).json({ message: "Server error", error: err.message }); // Send error message to client
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const WorkSchedule = require("../models/work_schedule");

router.post("/", async (req, res) => {
  const { userId, selectedDays, workTimes, blockedApps, nonWorkSchedule } =
    req.body;

  try {
    const newSchedule = new WorkSchedule({
      userId,
      selectedDays,
      workTimes,
      blockedApps,
      nonWorkSchedule,
    });

    await newSchedule.save();
    res.json({ message: "Schedule set successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
