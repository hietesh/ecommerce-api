const express = require('express');
const db = require('./config/mongoose');
const app = express();
const port = 4000;

// middlewares for parsing json and post request
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// product routes 
const productRoutes = require('./routes/product_routes');

//main route addition
app.use('/api/products',productRoutes);

// start the server
app.listen(port,function(err){
   if (err){console.log(`error in running server on port ${port}`);}
   console.log(`server running on port ${port}`);
});