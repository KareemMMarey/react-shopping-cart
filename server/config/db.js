const mongoose = require('mongoose');
const connectionString='mongodb://localhost:27017/react-shopping-cart';
function runDB(){

    
mongoose.
connect( process.env.MONGO_URI|| connectionString,{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>{
    console.log(res)
}).catch(err=>console.log(err));
}

module.exports = runDB;