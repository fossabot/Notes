const keys = require('../config/keys').get();
const stripe = require('stripe')(keys.stripe.secretKey);

const mongoose = require('mongoose');
const User = mongoose.model('user');

async function udpateUserWithCredits (userId, credits) {
  const user = await User.findById(userId);
  user.credits = (user.credits || 0) + credits;
  return await user.save();
}

module.exports = {
  pay: async (userId, id) => {
    const amount = 10;

    const charge = await stripe.charges.create({
      amount: `${amount * 100}`,
      currency: 'USD',
      description: 'buying with the test product',
      source: id
    });
    const newUser = await udpateUserWithCredits(userId, amount);
    console.log("new user", newUser );
    return newUser;
  }
};
