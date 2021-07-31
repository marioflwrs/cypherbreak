import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import jamRoute from "./routes/jams.js";

const app = express();

dotenv.config();

mongoose.connect(process.env.CYPHERBREAK_DB_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
  }, () => { console.log("connected to mongodb") });

  //middleware
  app.use(express.json());
  app.use(helmet());
  app.use(morgan("common"));

  app.use("/api/users", userRoute);
  app.use("/api/auth", authRoute);
  app.use("/api/posts", postRoute);
  app.use("/api/jams", jamRoute);

  app.listen(5000, () => {
    console.log("backend server is running on port 5000!")
  })