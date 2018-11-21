const passport = require('passport');

module.exports = (app) => {
  //calling googles server
  app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email']
    })
  );

  //callback for google back to ourserver
  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/post');
    }
  );


  //calling facebooks server
  app.get('/auth/facebook',
      passport.authenticate('facebook', {
        scope: ['email']
      })
  );

  //callback for facebook back to ourserver
  app.get('/auth/facebook/callback',
      passport.authenticate('facebook'),
      (req, res) => {
        res.redirect('/post');
      }
  );


  //with every single req the user is already sent
  app.get('/api/logout', (req, res) => {
    req.logout(); //builtin function set by passport
    //this should output nothing as cookie will be deleted
    res.redirect('/');
  });

  //with every single req the user is already sent
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
