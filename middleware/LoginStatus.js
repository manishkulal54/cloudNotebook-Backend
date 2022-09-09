const jwt=require('jsonwebtoken')


const secretKey="hell0|amM@n/$4"

const LoginStatus=(req,res,next)=>{
    const token=req.header("auth-token")
    if(!token){
        return res
        .status(500)
        .json({ message: "error", error: "Sorry invalid user authenticate first" });
    }
    try {
        const data=jwt.verify(token,secretKey)
        req.user=data.user
    } catch (error) {
        res
        .status(500)
        .json({ message: "error", error: "Sorry invalid user authenticate first" });
    }
    
    

    next()
}

module.exports=LoginStatus