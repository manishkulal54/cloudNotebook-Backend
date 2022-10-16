const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')

require('./conn');

const app=express();
dotenv.config()

const port=process.env.PORT || 3001


const corsOpts = {
    origin: '*',
    // credentials: true,
    // methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    // allowedHeaders: ['Content-Type',"auth-token"],
    // exposedHeaders: ['Content-Type',"auth-token"]
};
app.use(cors({
    // origin:"http://localhost:3000/signup"
}));

app.use(express.json())

app.use('/api/auth',require('./routes/User'))
app.use('/api/note',require('./routes/Notes'))



app.listen(port,()=>{
console.log('connected at port ',port);
})