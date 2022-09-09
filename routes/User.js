const express = require("express");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const User = require("../models/User");
const LoginStatus =require('../middleware/LoginStatus')
const router = express.Router();

const secretKey="hell0|amM@n/$4"

// signup
router.post("/signup", async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(500)
        .json({ message: "error", error: "user already have an account" });
    }
    const salt=await bcrypt.genSalt(10)
    const hashedPass=await bcrypt.hash(password,salt)
    user = await User.create({
      name:name,
      phone:phone,
      email:email,
      password:hashedPass,
    });
    const data={
      user:{
        id:user._id
      }
    }
    const token=jwt.sign(data,secretKey)
    res.status(500).json({ message: "success", token });

  }catch(e){
    res.status(500).json({message:"error",error:"error occured while creating a user"})
}
});


// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
try{
  let user = await User.findOne({ email });
  if (!user) {
    return res
      .status(500)
      .json({ message: "error", error: "invalid credential11" });
  }
  const hashPass=await bcrypt.compare(password,user.password)

  if (!hashPass) {
    return res
      .status(500)
      .json({ message: "error", error: "invalid credential" });
  }

  const data={
    user:{
      id:user._id
    }
  }
  const token=jwt.sign(data,secretKey)

  res.status(500).json({ message: "success", token });
}catch(e){
  res.status(500).json({message:"error",error:"error occured while logging in"})
}
});

router.post('/getdata',LoginStatus,async(req,res)=>{
  try{
  const _id=req.user.id
  let user=await User.findById(_id).select("-password")
  res
  .status(501)
  .json({ message: "success", user });


}catch(e){
  res.status(500).json({message:"error",error:"error occured while getting user data"})
}

})


router.post('/fetchalluser',async(req,res)=>{
  try{
  let users=await User.find({}).select('-password')
  if(!users)
    return res.status(100).json({message:'failed'})
  res.status(200).json({message:'success',users})
}catch(e){
  res.status(500).json({message:"error",error:"error occured while fetching all the user"})
}
})
module.exports = router;
