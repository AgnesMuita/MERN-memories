const { Mongoose } = require("mongoose");
const socialTravelMessage = require("../models/socialTravelModel");

const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new socialTravelMessage(post)
    try{
      await newPost.save();
      res.status(201).json({status:"OK", data:newPost})
    }
    catch(err){
      res.status(404).send({status:"FAILED", data:{err:err?.message||error}})
    }
}


const getAllPosts = async (req,res)=>{
  try{
    const allPosts = await socialTravelMessage.find();
    res.status(200).json(allPosts)
  }catch(err){
    throw({status:500,message:err})
  }
}


const getOnePost = async(req, res, next)=>{
  try{
  console.log(req.params.id)
    const onePost = await socialTravelMessage.filter((post)=>post.id===req.params.id)
    console.log(onePost)
    res.status(200).json(onePost)
  }catch(err){
    throw({status:500, message:err})
  }
}


const updatePost = async(req, res)=>{
  const {id:_id}=req.params;
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
  const updatedPost = await socialTravelMessage.findByIdAndUpdate(_id,post, {new:true})
  res.json(updatedPost)

}
module.exports={createPost, getAllPosts, getOnePost, updatePost};


