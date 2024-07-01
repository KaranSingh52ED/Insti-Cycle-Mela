const express = require("express");
const dotenv = require("dotenv");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary = require("cloudinary");
const fs = require("fs");

dotenv.config();

const router = express.Router();

const storage = multer.memoryStorage();
var upload = multer({
  storage: storage,
});

// Signup Route
const signup = async (req, res) => {
  try {
    const { firstName, lastName, userEmail, userMobile, userName } = req.body;

    // If current user exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(401).send("User Already Exists with this email");
    }

    // Check if file is provided
    if (!req.file) {
      return res.status(400).json({ error: "No Profile Image Provided" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);

    const password = req.body.userPassword;
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedPassword = await bcrypt.hash(password, salt);
    console.log("Request Body: ", req.body);

    const newUser = new User({
      firstName,
      lastName,
      userEmail,
      userMobile,
      userName,
      userPassword: encryptedPassword,
      profileImageUrl: result.secure_url, // Save the URL from Cloudinary
    });

    await newUser.save();

    return res.status(200).json({
      status: "Ok",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    // console.log(userEmail);

    const user = await User.findOne({ userEmail });

    if (user) {
      const passwordMatch = await bcrypt.compare(
        userPassword,
        user.userPassword
      );
      if (passwordMatch) {
        return res.json({
          status: "Ok",
          user: user,
        });
      } else {
        return res.json({ status: "Error", getUser: false });
      }
    } else {
      return res.json({ status: "Error", getUser: false });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signup, login };
