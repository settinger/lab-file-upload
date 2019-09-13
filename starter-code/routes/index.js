const express = require('express');
const router  = express.Router();

const Post = require('./../models/post');
const User = require('./../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  data = {};

  Post.find({})
    .then(allPosts => {

      for (let post of allPosts) {
        // Get the profile picture and username of the user that posted the post
        User.findById(post.creatorID)
          .then(user => {
            post.creator = user.username;
            post.pfp = user.profilePicUrl;
          })
          .catch(err => {
            console.log(`Error finding user: ${err}`)
          })
      }

      data.posts = allPosts;
      res.render('index', data);
    })
    .catch(err => {
      res.render('index', {});
    })

});

module.exports = router;
