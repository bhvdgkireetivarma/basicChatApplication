const fs=require('fs');
const express=require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({ extended: true })); 
const port=3000
app.get('/',(req,res)=>{
 
const data=fs.readFileSync('./index.html');
    res.send(data.toString());
})
app.listen(port,()=>{
    
})
//for get
