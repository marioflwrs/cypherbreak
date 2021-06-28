import mongoose from "mongoose";

mongoose.set('useCreateIndex', true);

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
    max: 20,
    unique: true
  },
  email: {
    type: String,
    require: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: []
  },
  followings: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
    max: 50
  },
  city: {
    type: String,
    max: 50
  },
  state : {
    type: String,
    max: 50
  },
},
{timestamps: true}
);

export default mongoose.model("User", UserSchema);