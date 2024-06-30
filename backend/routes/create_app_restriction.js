const express = require("express");
const AppRestriction = require("../models/app_restriction");

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, dayType, appLimits } = req.body;
  try {
    const appRestriction = new AppRestriction({ userId, dayType, appLimits });
    await appRestriction.save();
    res.status(201).json({ message: "App restriction created successfully" });
    console.log(req);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

router.get("/:userId/:dayType", async (req, res) => {
  const { userId, dayType } = req.params;
  try {
    const appRestrictions = await AppRestriction.find({ userId, dayType });
    res.json(appRestrictions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
