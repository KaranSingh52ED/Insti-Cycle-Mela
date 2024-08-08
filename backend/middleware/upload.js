const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err);
      cb(null, hash.toString("hex") + path.extname(file.originalname));
    });
  },
});

const upload = multer({ storage });

module.exports = upload;
