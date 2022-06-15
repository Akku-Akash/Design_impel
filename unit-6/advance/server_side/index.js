const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const userRoutes = require("./controllers/user.controller");
require('dotenv').config();
var connect = require("./configs/db")
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.get('/', async (req, res, next) => {
  res.send({ message: ' its working' });
});



app.use("/users",userRoutes);
app.use((req, res, next) => {
  next(createError.NotFound());
});

app.listen(2345,async function(){
    try{
        await connect()
       console.log("Listening on port 2345")
    }catch(err){
        console.log(err.message)
    }
})         