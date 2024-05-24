import mongoose from "mongoose";
import bcrypt  from "bcrypt";


// define person schema
const personSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number},
    work:{type:String,enum:['chef','waiter','manager'],required:true},
    mobile:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    address:{type:String},
    salary:{type:Number,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true}
})

// pre is a middleware used in bcrypt
// basically used for salt+hashing
personSchema.pre('save',async function(next){
    const Person=this;

    // hash the password only if it modified(or it is new)
    if(!Person.isModified('password')){
        return next();
    }

    try{
        // hash password generation
        const salt=await bcrypt.genSalt(10);

        // hash password
        const hashedPassword= await bcrypt.hash(Person.password,salt);

        // override the plain password with hashed one
        Person.password=hashedPassword;

        next();
    }catch(err){
        return next(err);
    }
})


personSchema.methods.comparePassword= async function(candidatePassword){
    try{
        // use brycpt to compare provided password with hashed password
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;

    }catch(err){
        throw err;
    }
}

// create Person model
const person=mongoose.model('person',personSchema);
export default person;