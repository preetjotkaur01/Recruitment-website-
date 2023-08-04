const express = require('express');
const app = express();
const port =3000;

app.get('/discover',(req,res)=>{
    res.send("Discover page");
})

app.get('/resources',(req,res)=>
{
    res.send("Resources");
})
app.listen(port,()=>{
    console.log("app is listening on this port");
})