var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('angular', { title: 'pagina con angular'});
});

module.exports = router;