const express = require("express");

const app = express();

app.get("/user/:userId",(req,res)=>{
  console.log("query",req.query)
  console.log("params",req.params)
  res.send({firstName: "Bhargav", lastName: "Nelakuditi"})
})


//this will match to all the HTTP method API calls to /newTab and order of using this will always matter ie if this is used in the starting then no matter which route post or get or put or delete of /user is called this will be executed.
app.use("/user",(req,res)=>{
  res.send("This is new tab")
})

app.listen(3000, ()=>{ console.log("server is listening on 3000 port")});