const mongoose=require('mongoose');
const NotesSchema=new mongoose.Schema({
    user:{
        // type:mongoose.Types.ObjectId
        type:String
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    tag:{
        type:String,
        default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Notes=mongoose.model('notes', NotesSchema)
module.exports=Notes