const express = require("express")
const connect = require("./configs/db")

const userController = require("./controlller/user_controller")

const app = express()
app.use(express.json())

app.use("/add", userController)
app.use("/", userController)

app.listen(2345,async function(){
    try{
        await connect()
       console.log("Listening on port 2345")
    }catch(err){
        console.log(err.message)
    }
})