const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

//this will match to all the HTTP method API calls to /newTab and order of using this will always matter ie if this is used in the starting then no matter which route post or get or put or delete of /user is called this will be executed.
app.use("/admin", adminAuth);

app.get("/user/userLogin", userAuth, (req,res)=>{
  res.send("fetched user data!")
});

app.get("/admin/adminDetails", (req,res)=>{
  res.send("fetched admin details");
})

app.delete("/admin/deleteAdmin", (req,res)=>{
  res.send("removed admin");
})

app.listen(3000, ()=>{ console.log("server is listening on 3000 port")});