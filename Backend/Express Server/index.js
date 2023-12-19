import  express from "express";
const app=express();
const port=3000;

//This is HTTP server request
app.get("/",(req,res)=>{
    res.send("Hello,World !");
})

app.listen(3000,()=>{
    console.log(`Server Running on port ${port}.`)
})