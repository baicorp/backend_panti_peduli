const multer = require("multer");
const path = require("path");

const storageArtikel = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/artikel");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const storageSertifikat = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/sertifikat");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadArticle = multer({ storage: storageArtikel });
const uploadSertifikat = multer({ storage: storageSertifikat });

module.exports = { uploadArticle };
