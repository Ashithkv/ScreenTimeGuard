const express = require("express");
const AppRestriction = require("../models/app_restriction");

const router = express.Router();

// Validator function for time format HH:MM
const validateTimeFormat = (time) => {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(time);
};

router.post("/", (req, res) => {
  const { userId, workScheduleId, mode, dayType, blockedApps, limitedApps } = req.body;

  // Validate time format for limitedApps
  let valid = true;
  if (limitedApps) {
    limitedApps.forEach(app => {
      if (!validateTimeFormat(app.weekdayLimit) || !validateTimeFormat(app.weekendLimit)) {
        valid = false;
      }
    });
  }

  if (!valid) {
    return res.status(400).json({ message: "Invalid time format. Please use HH:MM format." });
  }

  const appRestriction = new AppRestriction({ userId, workScheduleId, mode, dayType, blockedApps, limitedApps });

  appRestriction.save()
    .then(() => {
      res.status(201).json({ message: "App restriction created successfully" });
      console.log(req.body);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
      console.log(error);
    });
});

module.exports = router;


// router.get("/:userId/:dayType", async (req, res) => {
//   const { userId, dayType } = req.params;
//   try {
//     const appRestrictions = await AppRestriction.find({ userId, dayType });
//     res.json(appRestrictions);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
