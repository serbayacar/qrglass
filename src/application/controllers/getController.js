const url = require('url');

module.exports.getAsWeb =  function(req, res) {  
    // This endpoint serves data as Web Page

      // Parsing URL variables
      const url_parts = url.parse(req.url, true);
      const variables = url_parts.query;
  
      // Generating JSON Data
      const data = "{ name : 'product-" +  variables.urunID +"', production-date : '2021-07-13', exprire-date : '2022-01-01' }"
      res.json(data);
}

module.exports.getAsJson =  function(req, res) {  
    // This endpoint serves data as JSON


    // Parsing URL variables
    const url_parts = url.parse(req.url, true);
    const variables = url_parts.query;

    // Generating JSON Data
    const data = "{ name : 'product-" +  variables.urunID +"', production-date : '2021-07-13', exprire-date : '2022-01-01' }"
    res.json(data);
}
