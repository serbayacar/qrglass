const url = require('url');
const path = require('path');

module.exports.getAsWeb =  function(req, res) {  
    // This endpoint serves data as Web Page

    // Parsing URL variables
    const url_parts = url.parse(req.url, true);
    const variables = url_parts.query;
  
    //Generate Web Page for UrunID
    const webpage = path.join(__dirname, '../../webcontents/productDetail.html');
    res.render(webpage, {urunID:variables.urunID,urunProductDate:'2021-07-13',urunExpireDate:'2022-01-18'});
}

module.exports.getAsJson =  function(req, res) {  
    // This endpoint serves data as JSON

    // Parsing URL variables
    const url_parts = url.parse(req.url, true);
    const variables = url_parts.query;

    // Generating JSON Data
    const data = JSON.stringify({ name : 'product-' +  variables.urunID , productionDate : '2021-07-13', exprireDate : '2022-01-01'   }, null, 3);
    res.end(data);
}
