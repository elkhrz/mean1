var express = require('express'),
    stylus = require('stylus'),
    path = require("path"),
    bodyParser= require('body-parser'),
    app = express(),
    port = process.env.PORT ,
    index = require('./routes/index'),
    angular = require('./routes/angular'),
    login = require("./routes/login"),
    session = require("express-session");
    

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret:'secret',saveUninitialized:false,resave:false}));


app.use('/', index);
app.use('/angular', angular);
app.use("/login",login);
//app.use("/register",register);
//stylus
 
 function compile(str, path) {
  return stylus(str)
    .set('filename', path);
}

app.use(stylus.middleware({
  src:__dirname + '/public',
  compile: compile
}));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port,function(err){
    if (err) throw err;
    console.log('Example app listening at %s %d rediret to https://angular-express1-elkhrz.c9.io ' ,process.env.IP,port);
});
