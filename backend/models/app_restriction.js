const mongoose = require("mongoose");

const appRestrictionSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    // ref: "User", 
    required: true 
  },
  dayType: { 
    type: String, 
    enum: ["weekday", "weekend"], 
    required: true 
  },
  appLimits: [
    {
      app: { 
        type: String,
        required: true 
      },
      limit: { 
        type: String, 
        required: true 
      },
    },
  ],
});

const AppRestriction = mongoose.model("AppRestriction", appRestrictionSchema);

module.exports = AppRestriction;
