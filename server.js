const express =require("express");
const mongoose =require("mongoose");
const dotenv =require ("dotenv")

const app=express();
dotenv.config();
mongoose.connect(`mongodb+srv://Balu:${process.env.MONGODB_PASSWORD}@cluster0.eovmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
   .then(() => {
    app.listen(5000);
    console.log("Database is not connected Listening to localhost 5000");
  })
  .catch((err) => console.log(err));