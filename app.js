var express = require('express'),
    stylus = require('stylus'),
    path = require("path");
    
var app = express();
var url = 'mongodb://localhost:27017/test';
var port = process.env.PORT;
var index = require('./routes/index');
var angular = require('./routes/angular');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', index);
app.use('/angular', angular);
//stylus
 
 function compile(str, path) {
  return stylus(str)
    .set('filename', path)
}

app.use(stylus.middleware({
  src:__dirname + '/public',
}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log('Example app listening at %d',port);