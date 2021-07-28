var express = require('express');
var app= express();

// var parser = require('body-parser');
// app.use(parser.urlencoded({extended: false}));
// app.use(parser.json());

require('./application/routers/routerManager')(app);

app.listen(3000, "127.0.0.1");
