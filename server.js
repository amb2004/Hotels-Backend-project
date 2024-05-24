import express from "express";
import db from "./db.js";   

import bodyParser from "body-parser";
import MenuItem from "./models/Menu.js";
// require('dotenv').config();
// import 'dotenv/config';


import passport from "./auth.js";


const app=express();
const PORT=process.env.PORT || 4000;    

app.use(bodyParser.json());



app.use(passport.initialize());

const localAuthMiddleware=passport.authenticate('local',{session:false});
app.get('/',localAuthMiddleware ,(req,res)=>{
    res.send('Welcome to my hotel!');
})


// import router files
import router from "./routes/personRoutes.js";
// use the routers
app.use('/person',router);


app.listen(PORT,()=>{
    console.log('listening to port 4000 !');
})