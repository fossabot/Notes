const stripeService = require('../services/stripe');
const requireLogin = require('../middlewares/requireAuth');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const result = await stripeService.pay(req.user._id, req.body.id);
    console.log("result is ansdfln", result);
    res.send(result);
  });
};
