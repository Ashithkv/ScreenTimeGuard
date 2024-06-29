const mongoose = require("mongoose");

const AppLimitSchema = new mongoose.Schema({
  app_package: {
    type: String,
    required: true,
  },
  limit_duration: {
    type: String,
    required: true,
  },
});

const AppTimeLimitsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  app_limits: [AppLimitSchema],
});

module.exports = mongoose.model("AppTimeLimits", AppTimeLimitsSchema);
