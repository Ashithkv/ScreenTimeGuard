const { body, validationResult } = require("express-validator");
const AppLimits = require("../models/App_time_limit");
const router = require("express").Router(); // Simplified router creation

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

// Create or update app limits
router.post(
  "/",
  body("user_id").isString(),
  body("day").isString(),
  body("app_limits").isArray(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { user_id, day, app_limits } = req.body;
    console.log("Received request to save app limits:", req.body);

    AppLimits.findOne({ user_id, day })
      .then((appLimits) => {
        if (appLimits) {
          console.log("App limits found, updating:", appLimits);
          appLimits.app_limits = app_limits;
          return appLimits.save();
        } else {
          console.log("Creating new app limits");
          const newAppLimits = new AppLimits({ user_id, day, app_limits });
          return newAppLimits.save();
        }
      })
      .then(() => {
        console.log("App limits saved successfully");
        res.status(201).send("App limits saved successfully");
      })
      .catch((error) => {
        console.error("Error saving app limits:", error.message);
        res.status(400).send("Error saving app limits");
      });
  }
);

// Get app limits by user ID
router.get("/:user_id", (req, res) => {
  console.log(
    "Received request to fetch app limits for user_id:",
    req.params.user_id
  );

  AppLimits.find({ user_id: req.params.user_id })
    .then((appLimits) => {
      console.log("Fetched app limits:", appLimits);
      res.json(appLimits);
    })
    .catch((error) => {
      console.error("Error fetching app limits:", error.message);
      res.status(400).send("Error fetching app limits");
    });
});

router.use(errorHandler);

module.exports = router;
