const express    = require('express');
const passport   = require('passport');
const router     = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const uploadCloud = require('../config/cloudinary.js');
const Post = require('./../models/post');

router.get('/newpost', ensureLoggedIn('/login'), (req, res, next) => {
  res.render('newpost');
})

router.post('/newpost', ensureLoggedIn('/login'), uploadCloud.single('post-picture'), (req, res, next) => {
  const postContent = req.body['post-content'];
  const picName = req.body['pic-name'];

  Post.create({
    content: postContent,
    creatorID: req.user._id,
    picPath: req.file.secure_url,
    picName: picName
  })

  res.render('index');
});


module.exports = router;
