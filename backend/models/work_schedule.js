const mongoose = require("mongoose");

const workScheduleSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  selectedDays: {
    type: Array,
    required: true,
  },
  workTimes: {
    type: Array,
    required: true,
  },
  blockedApps: {
    type: Array,
    required: true,
  },
  nonWorkSchedule: {
    type: Array,
    required: true,
  },
});

const WorkSchedule = mongoose.model("WorkSchedule", workScheduleSchema);

module.exports = WorkSchedule;
