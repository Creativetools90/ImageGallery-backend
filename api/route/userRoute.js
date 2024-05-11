import express from "express";
import {AddPost ,GetAllPost} from '../controller/UserPostController.js';
const Route = express.Router();

Route.post("/create",AddPost);
Route.get("/allPost",GetAllPost);

export default Route;