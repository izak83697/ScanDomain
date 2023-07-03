const routes = require("./routesDomain")
exports.configRouter = (app) => {
  app.use("/", routes);
};
