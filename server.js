import express from "express";
import db from "./db.js";   

import bodyParser from "body-parser";
import MenuItem from "./models/Menu.js";

const app=express();
const port=4000;

app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('Welcome to my hotel!');
})


// import router files
import router from "./routes/personRoutes.js";

// use the routers
app.use('/person',router);

app.listen(port,()=>{
    console.log('listening to port 3000!');
})