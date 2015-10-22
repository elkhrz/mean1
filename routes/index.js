var express = require('express');
var router = express.Router();
var phone = require('../models/phone');
var data;
var phones = [{
    'name': 'Nexus S',
    'snippet': 'Fast just got faster with Nexus S.'
}, {
    'name': 'Motorola XOOM™ with Wi-Fi',
    'snippet': 'The Next, Next Generation tablet.'
}, {
    'name': 'MOTOROLA XOOM™',
    'snippet': 'The Next, Next Generation tablet.'
}];
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');
phone.find(function(err, phones) {
    if (err) console.log(err);
    if (phones) {data = phones;
    console.log('data recibida')}
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'pagina con jade',
        data: data,
        phones:phones
    });
});

module.exports = router;