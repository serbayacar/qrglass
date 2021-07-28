const dotenv = require("dotenv");

const express = require('express');
const app= express();

// var parser = require('body-parser');
// app.use(parser.urlencoded({extended: false}));
// app.use(parser.json());
dotenv.config();
require('./application/routers/routerManager')(app);



const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";
app.listen(port, ip, () => {
    console.log("APP running on " + ip + ":" + port);
  });
  
// app.listen(3000, "127.0.0.1");
