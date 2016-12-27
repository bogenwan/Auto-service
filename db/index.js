//require mongoose to have it avaliable for use
var mongoose = require('mongoose');
//set the monogodb path for mongoose
var mongoose.connect('mongodb://localhost/autoshops');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connected')
});

module.export = db;