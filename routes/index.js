var express = require('express');
var router = express.Router();
var phone = require('../models/phone');
var user = require("../models/users");
var bcrypt = require("bcryptjs");
var data;

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');
phone.find(function(err, phones) {
    if (err) console.log(err);
    if (phones) {data = phones;
    console.log('data recibida');
    console.log(phones[0]);
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'pagina con jade',
        data: data,
        //phones:phones
    });
});

router.get('/register', function(req, res, next) {
      res.render('login', { title: 'pagina de registro',
          accion:'registrar',action:'/register'
      });
});
router.get('/delete', function(req, res, next) {
      res.render('login', { title: 'pagina de registro',
          accion:'borrar',action:'/delete'
      });
});
router.post('/register',function(req,res){
    var salt = bcrypt.genSaltSync(10);
    var pass = req.body.pass;
    var hash = bcrypt.hashSync(pass,salt);
    user.create({name:req.body.name,
    pass:hash},function(err,back){
        if (err)console.log(err);
        console.log('usuario registrado %s',req.body.name);
        res.redirect('/register');
    });
});
router.post('/delete',function(req,res){
    user.findOneAndRemove({name:req.body.name,
    pass:bcrypt.hashSync(req.body.pass)},function(err,usr){
        if (err)throw err;
        if (!usr)console.log('usuario %s no encontrado',req.body.name);
        else
        console.log('usuario borrado %s',req.body.name);
        res.redirect('/register');
    });
});

module.exports = router;