import passport from "passport";
// const LocalStategy= require('passport-local').Strategy;
 import { Strategy as LocalStrategy } from 'passport-local';
 import person from "./models/person.js";



 // authentication code here->
// here done is a call back function.
passport.use(new LocalStrategy(async (USERNAME,PASSWORD, done) =>{
    // authentication logic here
    try{
       // console.log('Received Credentials:',USERNAME,PASSWORD);
        const user=await person.findOne({username:USERNAME});

        if(!user){
            return done(null,false, {message: 'Incorrect Username. '});
        }

        const isPasswordMatch=await user.comparePassword(PASSWORD);
        if(isPasswordMatch){
            return done(null,user);
        }else{
            return done(null,false,{message:'Incorrect password.'});
        }

    }catch(err){
        return done(err);
    }
}))


export default passport;