const express=require('express')
const router=express.Router();
const bycript=require("bcryptjs")
const jwt=require("jsonwebtoken")
const authMiddleware=require("../middlewares/authMiddleware")


const User=require("../models/userModel")
router.post('/register',async(req,res)=>{
    try {
        const userExist=await User.findOne({email:req.body.email})
        if(userExist){
            res.status(200).send({message:"user already exist",success:false})
        }
        const password=req.body.password;
        const salt=await bycript.genSalt(10);
        const hashedPassword=await bycript.hash(password,salt);
        req.body.password=hashedPassword
        const newuser= new User(req.body)
        await newuser.save()
        res.status(200).json({message:"user created successfully",success:true})
        
    } catch (error) {
        res.status(500).send({message:"error creating user ",success:false})
    }
})

router.post('/login',async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return res
            .status(200)
            .send({message:"user does not exist",success:false})
        }
        const isMatch=await bycript.compare(req.body.password,user.password)
        if(!isMatch){
            return res
            .status(200)
            .send({message:"password is incorrect",success:false})
        }
        else{
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{
                expiresIn:"1d"
            })
            res.status(200).send({message:"login success full",success:true,data:token})
        }
    } catch (error) {
        console.log(error);
        res.status(500)
        .send({message:"error loging in",success:false,error})
        
    }
})
router.post('/get-user-info-by-id',authMiddleware,async(req,res)=>{
    try {
    
        const user=await User.findOne({_id:req.body.userId})
        if(!user){
            return res
            .status(200)
            .send({message:"user does not exist",success:false})
        }else{
            res.status(200).send({success:true,data:{
                name:user.name,
                email:user.email

            },})
        }
    } catch (error) {
        res.status(500)
        .send({message:"error geting user info",success:false,error})
    }
})

module.exports=router;