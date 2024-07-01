const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const multer = require("multer");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const fs = require("fs");
const path = require("path");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Ensure the images directory exists
const imagesDir = path.join(__dirname, "../images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

var upload = multer({
  storage: storage,
});

// Signup
router.post("/signup", upload.single("profileImage"), authController.signup);

// Login
router.post("/login", authController.login);

module.exports = router;
