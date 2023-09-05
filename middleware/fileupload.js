const multer = require("multer");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Set a unique filename
  },
});

const uploadImage = multer({ storage: Storage });

module.exports = uploadImage
