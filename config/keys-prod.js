module.exports = {
  application: {
    port: process.env.PORT
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  facebook: {
    appID: process.env.FACEBOOK_APP_ID,
    appSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  },
  mongo: {
    dbName: 'nk-oauth-prod',
    dbUser: process.env.MONGO_USER,
    dbPassword: process.env.MONGO_PASSWORD,
    dBUrl: process.env.MONGO_DB_URL
  },
  cookie: {
    keys: [process.env.COOKIE_KEY],
    age: 30 * 24 * 60 * 60 * 1000
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  }
};
