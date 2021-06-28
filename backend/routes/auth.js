import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router()


//Register User
router.post("/register", async (req, res) => {

  try {
    //Generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create new user
    const newUser = new User ({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //Save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

//Login
router.post("/login", async (req, res) => {

  try {
    const user = await User.findOne({email: req.body.email});
    !user && res.status(404).send("User not found!")

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("Incorrect password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err) 
  }
  
})

export default router