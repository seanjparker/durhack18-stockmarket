var router = require('express').Router();
var dataController = require("../controllers/dataController");

/**
 * Data router
 */
const dataRouter = () => {
  // /data/getPortfolioStocks
  router.get("/getPortfolioStocks", dataController.getPortfolioStocks);
  router.get("/getPortfolioIndustry", dataController.getPortfolioIndustry);
  router.get("/getAll", dataController.getAllIndustry);
  return router;
};

module.exports = dataRouter;
