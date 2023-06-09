const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req, file);
    cb(null, path.join(__dirname, "..", "static", "images", "profileAvatars").normalize());
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.originalname.split(".").slice(0, -1).toString()}.${Date.now().toString().substring(6)}${path.extname(
        file.originalname
      )}`
    );
  },
});

// include `enctype="multipart/form-data"` inside form tag.
const uploadPhoto = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      throw new Error("Only jpg/jpeg and png files 2MB or less supported");
    }
  },
  // limits: {
  //   fileSize: 1024 * 1024 * 2,
  // },
});
// append "uploadPhoto" with either .single("image") or .array("images", <count>)

module.exports = { uploadPhoto };
