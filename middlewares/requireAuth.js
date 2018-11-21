module.exports = (req, res, next) => {
  if (!req.user) {
    res.setStatus(401).send({error: 'You should login'});
  }
  next();
};