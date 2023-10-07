const BlackListModel = require("../models/blackListModel");
const UserModel = require("../models/userModel");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = async(req,res,next) => {
      const {email,password} = req.body;
      const token = req.headers.authorization?.split(" ")[1]

    //   if(!token){
    //       res.status(400).send({"msg":"Login First!"})
    //   }
    if(token === undefined){
        return res.status(400).send({'msg' : 'Token not found'});
    }

      const user = await UserModel.findOne({email})
      const blacklistedUser = await BlackListModel.findOne({token});
      if(blacklistedUser){
          return res.status(400).send({'msg' : 'Token Revoked'})
      }

      jwt.verify(token,process.env.secretKey,(err,decoded)=>{
        if(decoded){
            req.body.userId = decoded.userId;
            req.body.username = decoded.username;
            next()
        }else{
            res.status(400).send({'msg' : 'Invalid token'});
        }
      })

}

module.exports  = authMiddleware;