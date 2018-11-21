const mongoose =  require('mongoose');
const {Schema} = require('mongoose');
const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: String,
  credits: Number,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'post'
  }]
});
mongoose.model('user', userSchema);