const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email })
    .then(userExists => {
      if (userExists) {
        return res.json({ message: "User already exists" });
      }
      
      return bcrypt.genSalt(10);
    })
    .then(salt => bcrypt.hash(password, salt))
    .then(hashedPassword => {
      return User.create({ name, email, password: hashedPassword });
    })
    .then(user => {
      if (!user) {
        return res.json({ message: "Failed to create user" });
      }
      console.log('User created:', user);
      res.json({ _id: user._id, message: "User registered successfully" });
    })
    .catch(error => {
      console.error('Error:', error);
      res.json({ message: error.message });
    });
});

module.exports = router;

// Login a user
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.json({ message: 'User not found' });
      }

      return bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.json({ message: 'Invalid Password' });
          }

          res.json({ _id: user._id, message: 'Login successful' });
        });
    })
    .catch(error => {
      console.error('Error:', error);
      res.json({ message: 'Server error' });
    });
});

module.exports = router;
