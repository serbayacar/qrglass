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
    // This endpoint serves data as JSON
    var dbConfig = {
        server: "192.168.1.253",
        database:"TestDB",
        user:"sa",
        password:"serbay123@@"
    };

    var Connection = require('tedious').Connection;  
    var config = {  
        server: '192.168.1.253',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'sa', //update me
                password: 'serbay123@@'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'TestDB'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");
        executeStatement();
    });
    
    connection.connect();
    
    var Request = require('tedious').Request  
    var TYPES = require('tedious').TYPES;  
  
    let lines = [];
    function executeStatement() {  
        request = new Request("SELECT TOP 1 [prdID],[uid],[dsl_pid],[daily_prd],[faulty_prd],[total_prd],[op_tim] FROM [MES_P20Y06].[dbo].[Production.Product];", function(err) {
        if (err) {  
            console.log(err);}  
        });  


        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value !== null) {  
                lines.push(column.value);  
              }  
            });  
            console.log(lines);
        });  
  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            console.log('Closing..');
            connection.close();
        });
        connection.execSql(request);  
    }  

    // Generating JSON Data
    const data = "{ name : 'product-1', production-date : '2021-07-13', exprire-date : '2022-01-01' }"
    res.json(data);
}
