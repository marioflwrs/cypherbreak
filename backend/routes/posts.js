import express from "express";
import Post from "../models/Post.js";
import User from "../models/User.js";

const router = express.Router();
//Create a post

router.post("/", async (req, res) => {
  const newPost = Post(req.body)

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch(err) {
    res.status(500).json(err)
  }
});

//Update a post
router.put("/:id", async(req, res) => {
  try{
    const post = await Post.findById(req.params.id);
    //check owner of post
    if(post.userId === req.body.userId) {
      await post.updateOne({$set: req.body});
      res.status(200).json("the post has been updated");
    }else {
      res.status(403).json("you can update only your post")
    }
  } catch(err) {
    res.status(500).json(err);
  }
});
//Delete a post

router.delete("/:id", async(req, res) => {
  try{
    const post = await Post.findById(req.params.id);
    //check owner of post
    if(post.userId === req.body.userId) {
      await post.deleteOne({$set: req.body});
      res.status(200).json("the post has been deleted");
    }else {
      res.status(403).json("you can only delete your own post")
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

//Like & unlike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(!post.likes.includes(req.body.userId)) {
      await post.updateOne({$push:{ likes:req.body.userId }});
      res.status(200).json("Liked!")
    } else {
      await post.updateOne({$pull: {likes:req.body.userId}});
      res.status(200).json("Unliked");
    }
  } catch(err) {
    res.status(500).json(err)
  }
});
//Get a post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch(err) {
    res.status(500).json(err);
  }
});

//Get timeline post

router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router