var mongoose = require('mongoose');
var phoneSchema = mongoose.Schema({
    name:String,
    description:String,
    images:[]
});

phoneSchema.statics.findByName = function (name, cb) {
  return this.find({ name: new RegExp(name, 'i') }, cb);
};// opcional-------


var phone = mongoose.model('phone',phoneSchema);

module.exports = phone;