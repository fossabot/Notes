const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys').get();
const mongoose = require('mongoose');

const User = mongoose.model('user');

//how to put user in a cookie
//we save only the id in the cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});


//from browser cookie how to get back the user
//when a request comes in passport has only the id which it deserializes back into user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

const googleStrategy = new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: keys.google.callbackURL,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const userObj = {
        googleId: profile.id,
      };
      const existingUser = await User.findOne(userObj);
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUserObj = {
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          credits: 0
        };
        const newUser = await new User(newUserObj).save();
        done(null, newUser);
      }
    }
);


const facebookStrategy = new FacebookStrategy(
    {
      clientID: keys.facebook.appID,
      clientSecret: keys.facebook.appSecret,
      callbackURL: keys.facebook.callbackURL,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const userObj = {
        facebookId: profile.id,
      };
      const existingUser = await User.findOne(userObj);
      if (existingUser) {
        done(null, existingUser);
      } else {
        console.log("profile is ", profile);
        const newUserObj = {
          facebookId: profile.id,
          name: profile.displayName,
          credits: 0
        };
        const newUser = await new User(newUserObj).save();
        done(null, newUser);
      }
    }
);



passport.use(googleStrategy);
passport.use(facebookStrategy);
