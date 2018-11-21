const mongoose = require('mongoose');
const Post = mongoose.model('post');
const User = mongoose.model('user');

module.exports = {
  remove: async (userId) => {
    await Post.remove({_user: userId});
    await User.remove({_id: userId});
    return "User Deletion successful";
  },
};
