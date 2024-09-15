const multer = require("multer");

// Configure multer to store files in memory
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
