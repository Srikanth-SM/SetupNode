const express = require('express');
const path = require('path');
const open = require('open');

const port = 8999;
const app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/../src/index.html'));
})

app.listen(port,function(error){
    if(error){
        console.log(error);
    }
    else{
        open('http://localhost:'+port);
        console.log("server started at port "+port);
    }
})
