const dotenv = require("dotenv");
//Express APP
const express = require('express');
const app= express();

//Environment variables handling
dotenv.config();

//View engine set as HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Routing
require('./src/application/routers/routerManager')(app);


//Serve Node App to IP:PORT
const port = process.env.PORT || 3000;
// const ip = process.env.IP || "127.0.0.1";
app.listen(port, () => {
    console.log("APP running on " + port);
  });
