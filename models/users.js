var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name:String,
    pass:String,
});



var user = mongoose.model('user',userSchema);

module.exports = user;