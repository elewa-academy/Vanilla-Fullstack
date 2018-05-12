const calc = require('../logics/calc');

module.exports = {

  operate(req, res, next) {
    
    const operation = req.params.operation;
    const a = Number(req.params.a)
    const b = Number(req.params.b)

    calc.operate(operation, a, b, (result) => {
    	let stringed_result = String(result);
    	res.send(stringed_result);
    });

  },
  docs(req, res, next){
    res.send("/add/a/b, /subtract/a/b, /multiply/a/b, /divide/a/b")
  }

};
