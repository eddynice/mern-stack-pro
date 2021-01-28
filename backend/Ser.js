var express = require('express');
var router  = express.Router();

router.get('/hello', function(req, res){
    res.send("hello word");
})

app.listen(3002)