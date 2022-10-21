const Product = require('./models/productModel')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes')
const app = express();
app.use(bodyParser.json());
app.use('/',router);
const connectionString='mongodb://localhost:27017/react-shopping-cart';
mongoose.
connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>{
    console.log(res)
}).catch(err=>console.log(err));


app.listen(3001, ()=>{

    console.log('server running')
})