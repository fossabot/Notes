const requireLogin = require('../middlewares/requireAuth');
const requireCredits = require('../middlewares/requireCredits');
const postService = require('../services/postService');

module.exports = (app) => {
  app.post('/api/post', requireLogin, requireCredits, async (req, res) => {
    const result = await postService.create(req.user._id, req.body);
    res.send(result);
  });

  app.put('/api/post', requireLogin, requireCredits, async (req, res) => {
    const result = await postService.create(req.user._id, req.body);
    res.send(result);
  });

  app.delete('/api/post/:postId', requireLogin, requireCredits, async (req, res) => {
    console.log("gotta delete a post with id", req.params.postId);
    const result = await postService.remove(req.user._id, req.params.postId);
    res.send(result);
  });

  app.get('/api/post', requireLogin, async (req, res) => {
    const result = await postService.getAll(req.user._id);
    res.send(result);
  });
};
