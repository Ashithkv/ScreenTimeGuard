const mongoose = require("mongoose");

const appRestrictionSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true 
  },
  workScheduleId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true 
  },
  mode: { 
    type: String, 
    enum: ["work-time", "non-work-time"], 
    required: true 
  },
  dayType: { 
    type: String, 
    enum: ["weekday", "weekend"], 
    required: true 
  },
  blockedApps: [
    {
      app: { 
        type: String, 
        required: true 
      },
    },
  ],
  limitedApps: [
    {
      app: { 
        type: String, 
        required: true 
      },
      weekdayLimit: { 
        type: String, 
        required: true,
      },
      weekendLimit: { 
        type: String, 
        required: true,
      },
    },
  ],
});

const AppRestriction = mongoose.model("AppRestriction", appRestrictionSchema);

module.exports = AppRestriction;
