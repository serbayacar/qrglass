const url = require('url');
const path = require('path');
const sql = require('mssql')

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

module.exports.getFromMSSQL =  function(req, res) {  

    // Parsing URL variables
    const url_parts = url.parse(req.url, true);
    const variables = url_parts.query;

    // DB Connection Configs
    const sqlConfig = {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        server: process.env.DB_SERVER,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000
        },
        options: {
          encrypt: false, // for azure
          trustServerCertificate: false // change to true for local dev / self-signed certs
        }
      }

    // connect to your database
    sql.connect(sqlConfig, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        variables.urunID
        const sqlQuery= `SELECT TOP 1 [dsl_pid],[wor_nam],[wor_qty],[qty_oky],[qty_wst] FROM [MES_P20Y06].[dbo].[WorkOrder] WHERE [dsl_pid]=${variables.urunID}`
        request.query(sqlQuery, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            console.log(recordset);
            // send records as a response
            res.json(recordset.recordset[0]);
        });
    });

}
