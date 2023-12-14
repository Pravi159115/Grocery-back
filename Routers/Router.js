const express = require("express");
const router = express.Router();
const userTemplatecopy = require('../Models/Usermodel');


router.post('/userinfo', (request,response)=>
{
    const userinfo = new userTemplatecopy({

        name:request.body.name,
        email:request.body.email,
        number:request.body.number,
        address:request.body.address,
    })  
    userinfo.save().then(data=>
        {
            response.json(data)
        }).catch(error=>
            {
                response.json(error)
            })
})


module.exports=router;