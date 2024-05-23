import mongoose from "mongoose";

// mongodb://localhost:27017/
// this is my connection string

// define mongoDB URL
const mongoURL='mongodb://localhost:27017/hotels'


// set mongoDB connection
mongoose.connect(mongoURL)


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
