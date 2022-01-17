
module.exports = (app) => {
  const fields = require("../controllers/fields.controller");
  var router = require("express").Router();

  router.get("/getfields", fields.allFields);
  app.use( router);
};
