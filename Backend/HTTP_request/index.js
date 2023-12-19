import  express from "express";
const app=express();
const port=3000;

//This is HTTP server request to handle endpoints denoted by /
app.get("/",(req,res)=>{
    // res.send("Hello,World !");
    // console.log(req.rawHeaders);
    // res.send("Hello,World");
    res.send("<h1>Hello</h1>")
})

//Handelling about endpoint
app.get("/about",(req,res)=>{
    res.send("<h1>Hi My name is RAHUL YADAV</h1>")
})

//Hnadeling contact endpoint
app.get("/contacts",(req,res)=>{
    res.send("<h1>Contact Me: 9091737267</h1>")
})

app.listen(3000,()=>{
    console.log(`Server Running on port ${port}.`)
})