
const express= require('express')
const path=require('path') 
const db=require('./mongoose')
const app=express()
app.use(express.static(path.join(__dirname, "./utils.js")));


app.get('/',function(req,res){

    res.sendFile(path.join(__dirname+'/index.html'))
    
})
app.listen(3000,function(){
    console.log("server is running")
})