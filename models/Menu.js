import mongoose from "mongoose";

const menuItemSchema= new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    taste:{type:String,required:true,enum:['sour','spicy','sweet']},
    is_drink:{type:Boolean,default:false},
    ingredients:{type:[String],default:[]},
    num_sales:{type:Number,default:0}
})


const MenuItem=mongoose.model('MenuItem',menuItemSchema);

export default MenuItem;