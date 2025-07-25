const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req,res)=>{
  const userObj = {
    firstName: "Bhargav",
    lastName: "Nelakuditi",
    emailId: "nbhargav98@gmail.com",
    password: "testing1234"
  }
  const user = new User(userObj); //creates a new instance of user 
  try {
    await user.save(); //saves the new user into the db
    res.send("user has been successfully created!")
  } catch (error) {
    res.status(400).send("Error saving the user!", error.message)
  }
})

connectDb().then(()=>{
  console.log("data base successfully connected")
  app.listen(3000, ()=>{ console.log("server is listening on 3000 port")});
}).catch((err)=>{
  console.error("error",err)
})
