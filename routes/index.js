var express = require('express');
var router = express.Router();
var phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index', { title: 'pagina con jade', data:phones});
});

module.exports = router;