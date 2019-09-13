'use strict';

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  path: String,
  originalName: String,
  extension: String
}, {
  timestamps: true
});

const File = mongoose.model("File", fileSchema);
module.exports = File;