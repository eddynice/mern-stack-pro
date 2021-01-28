const router = require('express').Router();
const User = require('../models/user.models');

router.route('/').get((req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res)=>{
    const username = req.body.username;
  //  const{body}=req;
   // const {username}=body;

    if(!username){
        // return next()
        return res.send({
         success:false,
         message: "fastname cannot be blank"
     })
        
         
     }
     User.find({
        username:username

    },(err,preiousUser)=>{
    if(err){
        return res.send('server error');

    }else if(preiousUser.length >0 ){
        return res.send('Acct exist')
    }


    const newUser =new User();
    newUser.username = username;

    newUser.save((err, user)=>{
        if(err){
            return res.send('server error');



        }
        return res.send('success');

    })

    })



})
    //.then(() => res.json('User added') )
    //.catch(err => res.sendStatus(400).json('Erreeeor: ' + err));
//})



module.exports = router;