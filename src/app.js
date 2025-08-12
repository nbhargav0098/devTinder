//create server
//before listining to server connect to dc
//write schema and create model and import it here to send the req to db
//write handler and middleware using request send the info to db
//use express json to convert JSON to javascript object while accessing req.body
const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async(req,res)=>{
  const user = new User(req.body);
  try {
    await user.save();
    res.send("user info has been saved successfully")
  } catch (error) {
    res.status(400).send("Error while saving user info")
  }
})


// /feed API to get all the users
app.get("/feed",async(req,res)=>{
  const users = await User.find({});
  try {
    res.send(users)
  } catch (error) {
    res.status(400).send("something went wrong");
  }

})

app.get("/user",async(req,res)=>{
  try {
    console.log("req",req.body)
    const user = await User.findOne({emailId: req.body.emailId});
    if (user.length === 0){
      res.status(404).send("user not found")
    }else{
      res.send(user)
    }
  } catch (error) {
    res.status(400).send("something went wrong")
  }
})

connectDb().then(()=>{
  console.log("Connected to Db successfully")
  app.listen(3000,()=> { console.log("created a web server and listening on port 3000")})
}).catch((e)=> {console.log("error",error)})

