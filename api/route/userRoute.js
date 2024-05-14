import express from "express";
import {AddPost ,GetAllPost} from '../controller/UserPostController.js';
import multer from "multer";
const Route = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "../client/public/");
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage });
  

Route.post("/create", upload.single("img"),AddPost);
Route.get("/allPost",GetAllPost);

export default Route;