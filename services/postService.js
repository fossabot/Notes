const keys = require('../config/keys').get();

const mongoose = require('mongoose');
const Post = mongoose.model('post');
const User = mongoose.model('user');



async function UpdateUserReducingCredits(user) {
  user.credits = user.credits - 1;
  return await user.save();
}


async function UpdateUserAfterPostDeletion(userId, postId) {
  const user = await User.findById(userId);
  user.posts = user.posts.filter( post => `${post._id}` !== `${postId}` );
  await user.save();
}

async function findAllPostsOfUser(userId) {
  return await Post.find({
    _user: userId
  });
}
module.exports = {
  create: async (userId, bodyinput) => {
    const {title, body} = bodyinput;
    const user = await User.findById(userId);
    const post = new Post({
      title,
      body,
      _user: userId,
      dateSent: Date.now()
    });
    const newPost = await post.save();
    user.posts.push(newPost._id);

    return await UpdateUserReducingCredits(user);
  },

  remove: async (userId, toBeDeletedPostId) => {
    const currentPosts = await findAllPostsOfUser(userId);
    await Post.remove({_id: toBeDeletedPostId});
    await UpdateUserAfterPostDeletion(userId, toBeDeletedPostId);
    return await currentPosts.filter(  post => `${post._id}` !== `${toBeDeletedPostId}`);
  },

  getAll: async (userId) => {
    return await findAllPostsOfUser(userId);
  }
};
