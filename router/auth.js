const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/userSchema');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the user registration API');
});

router.post('/register', async (req, res) => {
  const { name, email, phone, work, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email }); // Corrected typo
    if (existingUser) {
      return res.status(422).json({ error: "Email already exists" });
    } else {
      const newUser = new User({ name, email, phone, work, password });
      await newUser.save();
      return res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});



router.post('/signin',async (req,res)=>{
   
   try{
    const {email,password}=req.body;
    const user= await User.findOne({email:email});
        if(user){
          
            if(user.password != password){
                return res.json({message:"wrong password"});

            }


           return res.json({message:"user login  successfully"});
        }

        return res.json({message:"user email not founded"});
   }catch(err){
    console.log(err);
   }

})














module.exports = router;
