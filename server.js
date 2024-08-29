import express from "express"
import mysql from "mysql2"

const port = process.env.port || 5500;

const app = express();

app.get("/",(req,res)=>{
    res.send("Connected");
});


app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});