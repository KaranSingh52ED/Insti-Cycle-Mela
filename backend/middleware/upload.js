const multer = require("multer");

const upload = multer({
  dest: "./uploads/",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
});

module.exports = upload;
