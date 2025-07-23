const express = require("express");

const app = express();

app.get("/user",(req,res)=>{
  res.send({firstName: "Bhargav", lastName: "Nelakuditi"})
})

app.post("/user",(req,res)=>{
  console.log(req.body);
  //saving to DB
  res.send("Data successfully saved to DB!")
})

app.delete("/user",(req,res)=>{
  res.send("Successfully deleted the user from DB!")
})


//this will match to all the HTTP method API calls to /newTab and order of using this will always matter ie if this is used in the starting then no matter which route post or get or put or delete of /user is called this will be executed.
app.use("/user",(req,res)=>{
  res.send("This is new tab")
})

app.listen(3000, ()=>{ console.log("server is listening on 3000 port")});