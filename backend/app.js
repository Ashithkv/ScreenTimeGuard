// app.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// import routes
const usersRoute = require("./routes/create_user");
const schedulesRoute = require("./routes/create_work_schedule");
const appRestrictionsRoute = require("./routes/create_app_restriction");
const viewWorkScheduleRouter = require("./routes/view_work_schedule");
const updateWorkScheduleRouter = require("./routes/update_work_schedule");

// use routes
app.use("/api/users", usersRoute);
app.use("/api/schedules", schedulesRoute);
app.use("/api/app-restrictions", appRestrictionsRoute);
app.use("/api/view-work-schedule", viewWorkScheduleRouter);
app.use("/api/update-work-schedule", updateWorkScheduleRouter);

// connect to DB
mongoose.connect(process.env.DB_CONNECTION_STRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("Connected to DB");

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use`);
      } else {
        console.error(`Server error: ${err.message}`);
      }
      process.exit(1);
    });

  })
  .catch(err => console.error("Could not connect to DB", err));

// Graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
