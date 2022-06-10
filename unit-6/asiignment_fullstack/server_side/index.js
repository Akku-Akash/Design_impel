const express = require("express")
const connect = require("./configs/db")
const  cors = require(("cors"))
const usercontroller = require("./controller/userController")


const app = express()

app.use(express.json())
app.use(cors())
//app.use(express.urlencoded({ extended: false }));
//app.use(morgan('dev'));

app.use("", usercontroller)
// app.use("", usercontroller)


    
  // Start server on PORT 5000
  app.listen(5000, () => {
    console.log('Server started!');
  });

app.listen(8080,async function(){
    try{
        await connect()
        console.log("Listening on port 8080")
    }catch(err){
        console.log(err.message)
    }
})