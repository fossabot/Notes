module.exports = {
  includeRoutes: (app) => {
    require('./authRoutes')(app);
    require('./paymentRoutes')(app);
    require('./postRoutes')(app);
    require('./userRoutes')(app);
  }
};
