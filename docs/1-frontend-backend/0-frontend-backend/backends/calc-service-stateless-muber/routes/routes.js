const CalcController = require('../controllers/calc_controller');

module.exports = (app) => {
  app.get('/:operation/:a/:b', CalcController.operate);
  app.get("/docs", CalcController.docs)
};
