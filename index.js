require('./conn');
const express=require('express')
const cors=require('cors')
const app=express();
const dotenv=require('dotenv')

const port=process.env.PORT|| 3001

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/User'))
app.use('/api/note',require('./routes/Notes'))

app.listen(port,()=>{
console.log('connected at port ',port);
})