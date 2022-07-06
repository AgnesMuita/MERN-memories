const mongoose = require("mongoose");
const db =("mongodb+srv://aggie:ooVRHEDbULbF2t95@cluster0.a66yo.mongodb.net/?retryWrites=true&w=majority");



const connectDB = async()=>{
  try{
    await mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
   
  }catch(err){
    console.log(err.message) ;
    process.exit(1)
  }
}
module.exports = connectDB;


