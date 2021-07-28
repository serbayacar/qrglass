const dotenv = require("dotenv");

const express = require('express');
const app= express();

// var parser = require('body-parser');
// app.use(parser.urlencoded({extended: false}));
// app.use(parser.json());
dotenv.config();
require('./application/routers/routerManager')(app);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("APP running on " + port);
  });
  
// app.listen(3000, "127.0.0.1");
