// var url = require('url');

module.exports.getAsWeb =  function(req, res) {  
    res.json("{ name : 'web-product1', production-date : '2021-07-13', exprire-date : '2022-01-01' }");
}

module.exports.getAsJson =  function(req, res) {  
     
    res.json("{ name : 'product1', production-date : '2021-07-13', exprire-date : '2022-01-01' }");
}
