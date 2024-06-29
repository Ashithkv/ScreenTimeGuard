const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const router = require("express").Router(); // Simplified router creation

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

// Register route
router.post(
  "/register",
  body("name").isString(),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    console.log("Register endpoint hit");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    console.log("Registering user:", name, email);
    // Normally you would hash the password here before saving it to the database
    // For simplicity, we're omitting bcrypt hashing in this example
    const user = new User({ name, email, password });
    user
      .save()
      .then(() => {
        console.log("User registered successfully");
        res.status(201).send("User registered successfully");
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        res.status(400).send("Error registering user");
      });
  }
);

// Login route
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isString(),
  (req, res) => {
    console.log("Login endpoint hit");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    console.log("Logging in user:", email);
    User.findOne({ email })
      .then((user) => {
        if (!user) throw new Error("User not found");

        // For simplicity, we're omitting bcrypt password comparison and JWT token creation
        // Normally, you would compare passwords and generate JWT tokens here

        console.log("User logged in");
        res.status(200).send("User logged in");
      })
      .catch((error) => {
        console.error("Error logging in user:", error.message);
        res.status(400).send(error.message);
      });
  }
);

// Get user data (Profile route)
router.get("/profile", (req, res) => {
  console.log("Profile endpoint hit");
  // Simulated user data retrieval without authentication
  res.status(200).send("User profile data (mocked)");
});

router.use(errorHandler);

module.exports = router;
