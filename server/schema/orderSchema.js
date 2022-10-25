const mongoose = require('mongoose');
const orderSchema=new mongoose.Schema( {
   
    name:String,
    email:String,
},{timestamps:true});
module.exports =  orderSchema;


/* _id:String, i removed the id to be automatically generated */