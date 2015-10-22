var phone = require('./models/phone');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://localhost/test');
phone.find(function(err, data) {
    if (err) console.log(err);
    if (data) {var phones = data;
    console.log('data recibida')}
});


phone.findById("56269008641d2ab52e5a8a21", function(err, phone) {
    if (err)
      console.log(err);

    // Update the existing beer quantity
    phone.description = 'cambiando el tema';

    // Save the beer and check for errors
    phone.save(function(err) {
      if (err)
        console.log(err);

      console.log(phone);
    });
});

phone.remove(function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  phone.findByIdAndRemove("5628003ab92574b0525f3cf0", function(err) {
    if (err)
      console.log(err);

    console.log({ message: 'Borrando!' });
  });
});

phone.findByName('la chanda', function (err, teles) {
  if(err){  console.log(err);
}
  console.log(teles);
});