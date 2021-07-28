const dotenv = require("dotenv");
//Express APP
const express = require('express');
const app= express();

//Environment variables handling
dotenv.config();

//Routing
require('./application/routers/routerManager')(app);


//Serve Node App to IP:PORT
const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";
app.listen(port, ip, () => {
    console.log("APP running on " + ip + ":" + port);
  });
  
// app.listen(3000, "127.0.0.1");
