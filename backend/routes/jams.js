import express from "express";
import Jam from "../models/Jam.js";
import User from "../models/User.js";

const router = express.Router();

//Create a new jam
router.post("/", async (req, res) => {
  const newJam = Jam(req.body)

  try {
    const savedJam = await newJam.save();
    res.status(200).json(savedJam);
  } catch(err) {
    res.status(500).json(err)
  }
});

//Edit a jam
router.put("/:id", async(req, res) => {
  try{
    const jam = await Jam.findById(req.params.id);
    //check owner of jam
    if(jam.userId === req.body.userId) {
      await jam.updateOne({$set: req.body});
      res.status(200).json("the jam has been updated");
    }else {
      res.status(403).json("you can update only your jam")
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

//Delete a jam
router.delete("/:id/", async(req, res) => {
  try{
    const jam = await Jam.findById(req.params.id);
    //check owner of post
    if(jam.userId === req.body.userId) {
      await jam.deleteOne({$set: req.body});
      res.status(200).json("Jam has been deleted");
    }else {
      res.status(403).json("you can only delete your own jam")
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

//Like & unlike a jam (maybe change to "UPVOTE/DOWNVOTE")
router.put("/:id/like", async (req, res) => {
  try {
    const jam = await Jam.findById(req.params.id);
    if(!jam.likes.includes(req.body.userId)) {
      await jam.updateOne({$push:{ likes:req.body.userId }});
      res.status(200).json("Liked!")
    } else {
      await jam.updateOne({$pull: {likes:req.body.userId}});
      res.status(200).json("Unliked");
    }
  } catch(err) {
    res.status(500).json(err)
  }
});

//Get a post
router.get("/:id", async (req, res) => {
  try {
    const jam = await Jam.findById(req.params.id);
    res.status(200).json(jam);
  } catch(err) {
    res.status(500).json(err);
  }
});

export default router