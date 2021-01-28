const express = require('express');
const cors = require('cors');
 const { connection } = require('mongoose');
var mongoose= require('mongoose'); 

require('dotenv').config();

var app = express();
//const port = process.env.PORT || 5000
const port= 5000;

app.use(cors());
app.use(express.json());



//const oURI ='mongodb://127.0.0.1:27017/osazee'
//mongoose.connect(oURI,{useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex: true}
  // );

   const url=process.env.ATlas_URL;
   mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex: true})
// var osaURL= '"127.0.0.1:27017"'
 // mongoose.connect(osaURL,{useNewUrlParser: true, useCreateIndex: true})
 // mongoose.connection.on('error',err=> console.log('mongodb connection error: '));
  
    //const connection  = mongoose.connection;
   connection.once('open',() =>{
       console.log("mongo database connected successfully:",url);
    });
    connection.on('error',err=>{
        console.error('connection error:',err)
    })

    
    const exerciseRouter = require('./routes/exercise');
    const userRouter = require('./routes/user');


    app.use('/exercise', exerciseRouter);
    app.use('/user',userRouter);

    app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`);
});

//ATLAS_URI=mongodb+srv://mean123:mean123@cluster0-9licu.gcp
