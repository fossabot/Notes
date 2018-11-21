module.exports = {
  get: () => {
    console.log("node env is", process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
      console.log("production keys loading");
      return require('./keys-prod');
    } else {
      console.log("dev keys loading");
      return require('./keys-dev');
    }
  }
};
