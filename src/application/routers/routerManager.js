var route_api = require('./getRouter');

module.exports = function(app){

    app.use('/get', route_api);

}
