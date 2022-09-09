require('./conn');
const express=require('express')
const cors=require('cors')
const app=express();
const dotenv=require('dotenv')
dotenv.config()

const port=process.env.PORT || 3001

// app.use(cors())
app.use(
    cors({
      origin: ["https://upbeat-northcutt-4650a4.netlify.app"],
      methods: ["GET", "POST", "DELETE"],
      credentials: true,
      origin: true,
    })
  );
app.use(express.json())

app.use('/api/auth',require('./routes/User'))
app.use('/api/note',require('./routes/Notes'))

// if(process.env.NODE_ENV=='production'){
//     app.use(express.static('frontend/build'));
// }

app.listen(port,()=>{
console.log('connected at port ',port);
})