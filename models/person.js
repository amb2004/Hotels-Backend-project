import mongoose from "mongoose";

// define person schema
const personSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number},
    work:{type:String,enum:['chef','waiter','manager'],required:true},
    mobile:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    address:{type:String},
    salary:{type:Number,required:true}
})


// create Person model
const person=mongoose.model('person',personSchema);
export default person;