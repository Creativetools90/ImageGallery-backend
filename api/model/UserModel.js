import mongoose from "mongoose";

const UserPostSchema = new mongoose.Schema({
    img : {type : String ,},
    name : {type : String,},
    tag : [{type : String,}]
})

export default mongoose.model('userPost',UserPostSchema);