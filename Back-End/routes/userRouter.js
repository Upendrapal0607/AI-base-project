const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const UserModel = require("../models/userModel")
const validation = require("../middleware/validationregister")
const BlackListModel = require("../models/blackListModel")

userRouter.post("/register",validation,async(req,res)=>{
    try {
        const {password} = req.body;
        const hashPassword = await bcrypt.hash(password,10)

        const user = await UserModel.create({...req.body,password:hashPassword})
        res.status(200).send({"msg":"User Registered Successfully!",user})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user  = await UserModel.findOne({email})
        if(!user){
          return  res.status(400).send({"msg":"Invalid Credentials"})
        }
        
        const hashedPassword = await bcrypt.compare(password,user.password)
          if(!hashedPassword){
              res.status(400).send({"msg":"Invalid Credentials"})
          }else{
            const token = jwt.sign({userId:user._id,username:user.name},process.env.secretKey,{expiresIn:"1d"})
            res.status(200).send({"msg":"User LoggedIn Successfully!",token,username:user.name})
          }

    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})



userRouter.get("/logout",async(req,res)=>{
    try {
        const {email,password} = req.body;
        const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            res.status(400).send({"msg":"Login First!"})
        }else{
            const logoutUser = await BlackListModel.create({token})
            res.status(200).send({"msg":"User is LoggedOut!"})
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})



module.exports = userRouter;