import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Route from "./route/userRoute.js";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());
app.use("/api",Route);
const url = process.env.database_url;
mongoose
  .connect(url)
  .then(() => {
    console.log("db is connected");
    app.listen(8000, () => {
      console.log("server is running ");
    });
  })
  .catch((e) => {
    console.log("database is not connected", e);
  });


