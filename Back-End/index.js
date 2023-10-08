const express= require("express");
const { connection } = require("./db");
const interviewRouter = require("./routes/interviewRouter");
require("dotenv").config()
const PORT = process.env.PORT||8080
const app= express();
app.use(express.json())
app.use(require("cors")())
app.use("/interview",interviewRouter)
app.get("/",(req,res)=>{
    res.setHeader("content-type","text/html")
    res.send("<h1>Welcome to Master base Interview</h1>")
})

app.listen(PORT,async()=>{
    try {
        await connection 
        console.log("connected to the Data-Base");
    } catch (error) {
        
    }
    console.log(`server is running on port ${PORT}`)
})