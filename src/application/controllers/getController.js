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

module.exports.getFromMSSQL =  function(req, res) {  
    var lines = [];
    // This endpoint serves data as JSON

    var Connection = require('tedious').Connection;  
    var config = {  
        server: process.env.DB_SERVER, //'10.20.1.11',  //update me
        authentication: {
            type: 'default',
            options: {
                userName:  process.env.DB_USER, //'sa', //update me
                password: process.env.DB_PASS  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: process.env.DB_NAME //'MES_P20Y06'  //update me
        }
    };

    //Consoling dbconfig
    console.log(config);

    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");
        cevap = executeStatement();
        console.log('cevap :: ', cevap);
    });
    
    connection.connect();
    
    var Request = require('tedious').Request  
    var TYPES = require('tedious').TYPES;  
  
    var lines = [];
    function executeStatement() {  
        request = new Request("SELECT TOP 1 [wor_nam],[wor_qty],[qty_oky],[qty_wst] FROM [MES_P20Y06].[dbo].[WorkOrder];", function(err) {
        if (err) {  
            console.log(err);}  
        });

        request.on('row', function(columns) {  
            var obj = {}
            columns.forEach(function(column) {  
              if (column.value !== null) {  
                var key = column.metadata.colName;
                var val = column.value;
                obj[key] = val;
              }  
            });  
            console.log(obj);
            lines.push(obj)
        });  
  
  
        request.on('done', function(rowCount, more) {  
            console.log(rowCount + ' rows returned');
            console.log('Done lines :: ', lines);
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            console.log('Closing..');
            connection.close();
        });
        connection.execSql(request);  
    }  

    // Generating JSON Data
    console.log('Serbay Son');
    res.json(lines);
    // const data = "{ name : 'product-1', production-date : '2021-07-13', exprire-date : '2022-01-01' }"
    // res.json(data);
}
