
const mongoose = require('mongoose')
const userTemplate = new mongoose.Schema({

        name:
        {
            type:String,
            required:true,
        },
        email:
        {
            type:String,
            required:true,
        },
        number:
        {
            type:Number,
            required:true,
        },
        address:
        {
            type:String,
            required:true
        }
    }
)
module.exports=mongoose.model('myusers',userTemplate)