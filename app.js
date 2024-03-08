require('dotenv').config();
const express = require('express');
const app = express();
const port = 5050;
const notFound = require('./features/middleware/NotFound');
const rout = require('./features/Router/router');
const cors = require('cors');

app.use(cors());
app.use(express.json())
app.use('/',rout)
app.use(notFound)



try{
    app.listen(port,()=>{
        console.log("app is up and running")
    })
}catch(error){console.log(error)}