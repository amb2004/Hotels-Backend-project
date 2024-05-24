import mongoose from "mongoose";



// define mongoDB URL
// const mongoURL=process.env.MONGODB_URL;


// set mongoDB connection
mongoose.connect("mongodb://localhost:27017/hotels");


// object represting mongoose connection
// this object only we would use everywhere
const db=mongoose.connection;


// define event listener on mongoose connection
db.on('connected',()=>{
    console.log('Db connected');
})

db.on('disconnected',()=>{
    console.log('Db not connected');
})

db.on('error',(err)=>{
    console.log('Error in connection', err);
})


export default db;
