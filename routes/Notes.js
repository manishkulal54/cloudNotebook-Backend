const express=require('express')
const Notes=require('../models/Notes')
const LoginStatus=require('../middleware/LoginStatus')

const router=express.Router()


router.post('/createnote',LoginStatus,async(req,res)=>{
    try{
    const userId=req.user.id;
    const {title,description,tag}=req.body
    let note=await Notes.create({
        user:userId,
        title,
        description,
        tag
    })
    res.status(201).json({message:"success",note})
}catch(e){
    res.status(400).json({message:"error",error:"error occured while creating a notes"})
}
})
router.post('/updatenote',LoginStatus, async(req,res)=>{
    try{
    const userId=req.user.id;
    if(!userId){
        return res.status(400).json({message:'error',error:"authenticate first"})
    }
    const {noteId,title,description,tag}=req.body

    const newNote={}
    newNote.title=title
    newNote.description=description
    newNote.tag=tag

    let note=await Notes.findByIdAndUpdate(noteId,{$set:newNote},{new:true})
    res.status(201).json({message:"success",note})
}catch(e){
    res.status(400).json({message:"error",error:"error occured while updating a notes"})
}
    
})

router.get('/fetchnote',LoginStatus ,async(req,res)=>{
    try{
    const userId=req.user.id;
    if(!userId){
        return res.status(400).json({message:'error',error:"authenticate first"})
    }
    let note=await Notes.find({user:userId})
    if(!note){
        return res.status(400).json({message:"error",error:"notes not available"})
    }
    res.status(200).json({message:"success",note})
}catch(e){
    res.status(400).json({message:"error",error:"error occured while fetching notes"})
}
    
})

router.delete('/deletenote',LoginStatus,async(req,res)=>{
    try{
    const userId=req.user.id;
    if(!userId){
        return res.status(400).json({message:'error',error:"authenticate first"})
    }
    let note=await Notes.findByIdAndDelete(req.body.noteId)
    res.status(201).json({message:"success",note})
}catch(e){
    res.status(400).json({message:"error",error:"error occured while deleting a note"})
}
})



router.get('/fetchallnote',async(req,res)=>{
    try{
    let notes=await Notes.find({})
    if(!notes){
        return res.status(400).json({message:"error",error:"notes not available"})
    }
    res.status(201).json({message:"success",notes})    
}catch(e){
    res.status(400).json({message:"error",error:"error occured while fetching all notes"})
}
})


module.exports=router