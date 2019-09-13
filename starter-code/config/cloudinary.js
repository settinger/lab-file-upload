'use strict';

require('dotenv').config();
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

const File = require('./../models/file');

cloudinary.config(); // Not necessary if using CLOUDINARY_URL environment variable?

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'lab-pfp', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  // filename: (req, file, cb) => {
  //   cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  // }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;