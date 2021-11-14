module.exports = app => {
  const controller = require("../controllers/controller.js");

  app.get("/champions", controller.findAll)

  app.get("/champions/:id", controller.findOne);
};
