const UserModel = require("../models/userModel");

const validation = async(req,res,next) => {
  const {email,password} = req.body;

  if(password.length < 8){
    return res.status(400).send({"msg" : "Password should be minimum of 8 characters!"})
  }
  if(!/\d/.test(password)){
    return res.status(400).send({"msg" : "Password should contain atleast one number!"})
  }

  if(!/[A-Z]/.test(password)){
    return res.status(400).send({"msg" : "Password should contain atleast an uppercase character!"})
  }
  if(!/[!@#$%^&*]/.test(password)){
    return res.status(400).send({"msg" : "Password should contain atleast a special character!"})
  }

  const user = await UserModel.findOne({email})

  if(user){
     res.status(400).send({"msg" : "User Already Exists!"})
  }else{
    next()
  }
}

module.exports = validation;