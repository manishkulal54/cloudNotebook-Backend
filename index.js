require('./conn');
const express=require('express')
const cors=require('cors')
const app=express();
const dotenv=require('dotenv')
dotenv.config()

const port=process.env.PORT || 3001

// app.use(cors())

const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));

app.use(express.json())

app.use('/api/auth',require('./routes/User'))
app.use('/api/note',require('./routes/Notes'))



app.listen(port,()=>{
console.log('connected at port ',port);
})