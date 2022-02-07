const express = require("express")
const mongoose = require("mongoose")


const connect = require("./configs/db")
const bankcontroller = require("./controller/productcontroller")
const app = express();
app.use(express.json())
app.use("/bank", bankcontroller)

app.listen(4500, async function(){
    try{
        await connect()
        console.log("listening on port 4500")
    }catch(e){
        console.error("error", e.message)
    }
})