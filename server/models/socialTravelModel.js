const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const socialSchema = new Schema({
    creator:{type:String},
    title:String,
    country:String,
    description:String, 
    travelDate:String,
    tags:[String],
    image:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
      type:Date,
      default: new Date()
    }
})

const socialTravelMessage = mongoose.model('socialTravelSchema', socialSchema)
module.exports = socialTravelMessage;