const keys = require('./config/keys').get();
const mongoose = require('mongoose');
mongoose.connect(keys.mongo.dBUrl, {useNewUrlParser: true});
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const cookieSession = require('cookie-session');
const passport = require('passport');

//tell our express to use cookies and properties of cookies
app.use(
    cookieSession({
      maxAge: keys.cookie.age,
      keys: keys.cookie.keys
    })
);

app.use(passport.initialize());
app.use(passport.session());

//body parser middle ware gets the jsob body and puts it in req.body object
// a very small middleware but useful
app.use(bodyParser.json()); //


require('./models/importModels').includeModules();
require('./services/passport');
require('./routes/importRoutes').includeRoutes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(keys.application.port);
