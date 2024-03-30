import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from '../backend/routes/userRoutes.js';
import userAuth from '../backend/routes/authRoutes.js';

dotenv.config();

// mongoose.connect(process.env.MONGO)
// .then(() => {
//      console.log("database connected")
// }).catch((err) => {
//    console.log('OH NO ERROR!!');
//    console.log(err);
// })

mongoose.connect("mongodb://127.0.0.1:27017/mern-auth");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DATABASE CONNECTED");
});

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use('/api/auth' , userAuth )

app.listen(3000, () => {
  console.log("Server in running on the port 3000!!");
});
