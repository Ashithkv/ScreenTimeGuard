const mongoose = require("mongoose");

const TimeSlotSchema = new mongoose.Schema({
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
});

const WorkScheduleSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  work_time_slots: [TimeSlotSchema],
  blocked_apps: [String],
});

module.exports = mongoose.model("WorkSchedule", WorkScheduleSchema);
