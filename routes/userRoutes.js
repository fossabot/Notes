const requireLogin = require('../middlewares/requireAuth');
const requireCredits = require('../middlewares/requireCredits');
const userService = require('../services/userService');

module.exports = (app) => {
  app.get('/api/user/delete', requireLogin, requireCredits, async (req, res) => {
    console.log("gotta delete a user with id", req.user._id);
    const result = await userService.remove(req.user._id);
    res.send(result);
  });
};
