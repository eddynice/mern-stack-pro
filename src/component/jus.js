const express = require('express');
const cors = require('cors');

const mongoose= require('mongoose'); 

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const connection  = mongoose.connection;
   connection.once('open',() =>{
       console.log("mongo database connected successfully:,oURI");
    })
    connection.on('error',err=>{
        console.error('connection error:',err)
    })

app.listen(port, ()=>{
    console.log('server is running')
})