







const express = require('express')
const mongoose = require('mongoose')
const taskRouter =require('./routers/task')
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());
app.use('/task', taskRouter);

const CONECTION_URL='mongodb+srv://0527688937a:SE6Z41lOGAKxI51n@cluster0.rwu3gxz.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));




// const express=require('express')

// const taskRouters=require('./routers/task')
// const app=express()
app.use(express.json())

// const taskMiddleware=(req,res,next)=>{
//     console.log(`${req.url}  ${req.method}`)
//     next()
// }
// app.use(taskMiddleware)
// app.use('/task',taskRouters)

// app.listen(2000,()=>{
//     console.log("you are in app");
// })