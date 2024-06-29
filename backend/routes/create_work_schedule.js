const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const WorkSchedule = require("../models/work_schedule");

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

// Create or update work schedule
router.post(
  "/",
  body("user_id").isString(),
  body("day").isString(),
  body("work_time_slots").isArray(),
  body("blocked_apps").isArray(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { user_id, day, work_time_slots, blocked_apps } = req.body;
    console.log("Received request to save work schedule:", req.body);

    WorkSchedule.findOne({ user_id, day })
      .then((workSchedule) => {
        if (workSchedule) {
          console.log("Work schedule found, updating:", workSchedule);
          workSchedule.work_time_slots = work_time_slots;
          workSchedule.blocked_apps = blocked_apps;
          return workSchedule.save();
        } else {
          console.log("Creating new work schedule");
          const newWorkSchedule = new WorkSchedule({
            user_id,
            day,
            work_time_slots,
            blocked_apps,
          });
          return newWorkSchedule.save();
        }
      })
      .then(() => {
        console.log("Work schedule saved successfully");
        res.status(201).send("Work schedule saved successfully");
      })
      .catch((error) => {
        console.log("Error saving work schedule:", error.message);
        res.status(400).send("Error saving work schedule");
      });
  }
);

// Error handling middleware
router.use(errorHandler);

module.exports = router;
