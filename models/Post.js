const mongoose =  require('mongoose');
const {Schema} = require('mongoose');
const postSchema = new Schema({
  title: String,
  body: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('post', postSchema);