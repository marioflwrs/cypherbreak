import mongoose from "mongoose";
import router from "../routes/auth.js";

const PostSchema = new mongoose.Schema (
  {
    userId: {
      type: String,
      require: true
    },
    desc: {
      type: String,
      max: 500
    },
    img: {
      type: String
    },
    likes: {
      type: Array,
      default: []
    }
  },
    {timestamps: true}
);

export default mongoose.model("Post", PostSchema);