const express = require("express")

const connect = require("./configs/db")
const usercontroller = require("./controllers/user.controller")
const app = express()

app.use(express.json())
app.use("/users", usercontroller)


app.listen(4500, async function(){
    try{
        await connect
     console.log("Listening on port 4500")
    }catch(err){
        console.log(err.message)
    }
})