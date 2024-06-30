// const mongoose = require("mongoose");

// const workTimeSchema = new mongoose.Schema({
//   start: { type: String, required: true },
//   end: { type: String, required: true },
// });

// const nonWorkScheduleSchema = new mongoose.Schema({
//   weekdays: {
//     app: { type: String, required: true },
//     timeLimit: { type: String, required: true },
//   },
//   weekends: {
//     app: { type: String, required: true },
//     timeLimit: { type: String, required: true },
//   },
// });

// const scheduleSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   day: { type: String, required: true },
//   workTimes: [workTimeSchema],
//   blockedApps: [{ type: String, required: true }],
//   nonWorkSchedule: {
//     weekdays: [{ type: nonWorkScheduleSchema }],
//     weekends: [{ type: nonWorkScheduleSchema }],
//   },
// });

// const Schedule = mongoose.model("Schedule", scheduleSchema);

// module.exports = Schedule;

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
