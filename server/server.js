

require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');
const productRouter = require('./routes/routes')
const orderRouter = require('./routes/orderRoutes');
const runDB = require('./config/db');

console.log(process.env.NODE_EVN)
const app = express();
app.use(bodyParser.json());
app.use('/',productRouter);
app.use('/',orderRouter);

runDB();

if(process.env.NODE_EVN=='production'){
    app.use('/',express.static('public'));
    app.get('/',(req,res )=>res.sendFile(__dirname + "/public/index.html"))
}
else{
    app.get('/',(req,res )=>res.send("Running ...."))
}

const PORT=process.env.PORT;
app.listen(PORT||3001, ()=>{

    console.log('server running')
})