const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config()

const DB=process.env.DATABASE
const connectToServer=()=>{
    mongoose.connect(DB,()=>{
        console.log("connected to server");
    })
}
module.exports=connectToServer()