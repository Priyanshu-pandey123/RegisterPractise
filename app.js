const express = require('express');
const dotenv=require('dotenv');

const app =express();

dotenv.config({path:'./config.env'});
const port= process.env.PORT || 8000;
 require('./db/connection.js');
app.use(express.json());
const middleware=(req,res,next)=>{
    res.send("hello form middleware");
  console.log("middleware11");
  next();
}
 
app.use(require('./router/auth.js'));

app.get('/',(req,res)=>{
 res.send('hello world from priyanshu');
})
app.get('/middleware',middleware,(req,res)=>{
    console.log("middlewareq");
})

app.listen(port,()=>{console.log('server in running on port',port)});