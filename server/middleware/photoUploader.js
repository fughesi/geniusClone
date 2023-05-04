const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "static", "images", "profileAvatars").normalize());
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname.split(".").slice(0, -1).toString()}.${Date.now().toString().substring(6)}.${
        file.fieldname.split(".").at(-1).toString() || "jpg"
      }`
    );
  },
});

const uploadPhoto = (req, res, next) => {
  // include `enctype="multipart/form-data"` inside form tag.
  multer({
    storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.memtype === "image/jpeg") {
        callbackify(null, true);
      } else {
        console.log("Only jpg/jpeg and png files supported");
        callbackify(null, false);
        throw new Error("Only jpg/jpeg and png files supported");
      }
    },
    limits: {
      fileSize: 1024 * 1024 * 2,
    },
  });
  // append "uploadPhoto" with either .single("image") or .array("images", <count>)
  next();
};

module.exports = { uploadPhoto };
