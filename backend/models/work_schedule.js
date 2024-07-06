const mongoose = require("mongoose");

const workScheduleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  selectedDays: {
    type: [String],
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  workTimes: {
    type: [
      {
        startTime: { 
          type: Date,
          required: true,
        },
        endTime: {
          type: Date,
          required: true,
        },
      }
    ],
    required: true,
  },
  blockedApps: {
    type: [String],
    required: true,
  },
  nonWorkSchedule: {
    type: [
      {
        app: {
          type: String,
          required: true,
        },
        limit: {
          type: Number, 
          required: true,
        },
      }
    ],
    required: true,
  },
});

const WorkSchedule = mongoose.model("WorkSchedule", workScheduleSchema);

module.exports = WorkSchedule;
