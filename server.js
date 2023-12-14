const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routerUrl= require('./Routers/Router')


const cors = require("cors");

if(mongoose.connect('mongodb+srv://praveenpravipkk:Pravi%401991@cluster0.vrps8mx.mongodb.net/user-db?retryWrites=true&w=majority'))
{
    console.log("Database is connected");
}
app.use(express.json())
app.use(cors())
app.use('/app',routerUrl)

app.listen(3001, ()=> {
    
    console.log("server is connected");
})