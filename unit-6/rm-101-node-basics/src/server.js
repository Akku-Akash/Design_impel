// install and import express
const express = require("express")

const connect = require("./configs/db")
const userController = require("./controller/userController")
let app = express();

app.use(express.json())

app.use("/", userController)
// Code here
app.listen(8000, async function (){
    try{
        await connect()
         console.log("Listening on port 8000")
    }catch(err){
        console.log(err.message)
    }
})

// Note: Do not remove this export statement

module.exports = app;


