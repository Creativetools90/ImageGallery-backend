import userPost from '../model/UserModel.js';

export const AddPost = async (req , res)=>{
    try{
        const post = new userPost(req.body);
        if(!post)return res.status(404).json({msg:"post not found"});
        const savedPost = await post.save();
        res.status(200).json({msg:"post saved successfully",savedPost});
    }catch(err){
        res.status(403).json({msg : "error",err})
    }
}

export const GetAllPost = async (req, res) => {
    try{
        const getAllData = await userPost.find();
        if(!getAllData) return res.status(404).json({msg:"posts not found"});
        res.status(200).json({msg:"post have",getAllData});
    }catch(err){
        res.status(403).json({msg : "error",err})
    }
}