 const express = require("express");

 const app = express();

 app.get("/hello",(req,res)=>{
    res.send("hello ap");
 })
 app.post("/user",(req,res)=>{
    console.log(req);
    res.send("data saved successfully")
    
 })
 app.use((req,res)=>{
    res.send("hello osho");
 })
 app.listen(7777,()=>{
    console.log("Server is succcessfully listening port 7777....");
 }) 