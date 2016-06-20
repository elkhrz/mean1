var express = require('express');
var router = express.Router();
var user = require("../models/users");
var mongoose = require("mongoose")

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('login', { title: 'pagina de ingreso',
          accion:'ingresar'
      });
});
router.post("/",function(req,res){
    
    var name = req.body.name;
    var pass = req.body.pass;
    mongoose.connect('mongodb://localhost/test');
    user.findOne({name:name,pass:pass},function(err,user){
        if(err)console.log(err);
        console.log('%s logged',user.name);
        res.send(user);
        mongoose.disconnect();
        
    });
});

module.exports = router;