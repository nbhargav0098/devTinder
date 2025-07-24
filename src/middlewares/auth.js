const adminAuth = (req,res,next) => {
  const token = "abc";
  if( token !== "abc" ){
    res.status(401).send("you are not authorized to access this api!");
  } else {
    next();
  }
}

const userAuth = (req,res,next) => {
  const token = "ne";
  if(token !== "new"){
    res.status(401).send("you are not authorized to access this api");
  }else{
    next();
  }
}

module.exports = { adminAuth, userAuth };