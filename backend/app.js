const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

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
mongoose
  .connect("mongodb://localhost:27017/social_media_controller_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to DB:", err.message);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
