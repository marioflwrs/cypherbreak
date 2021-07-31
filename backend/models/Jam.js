const mongoose = require("mongoose");

const JamSchema = new mongoose.Schema (
  {
    userId: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    desc: {
      type: String,
      max: 280
    },
    date: {
      type: String,
      require: true
    },
    address: {
      type: String,
      max: 30,
      require: true
    },
    city: {
      type: String,
      max: 30,
      require: true
    },
    state: {
      type: String,
      max: 2,
      require: true
    },
    zip: {
      type: Number,
      require: true
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

module.exports = mongoose.model("Jam", JamSchema);