module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    res.setStatus(403).send({error: 'Not enough Credits!'});
  }
  next();
};