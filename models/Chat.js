var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost/test');


var mongooseUri = process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  'mongodb://localhost/test';
var mongooseUri = uriUtil.formatMongoose(mongooseUri);


mongoose.connect(mongooseUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var ChatSchema = new Schema({
  id: 'String',
  username: 'String'
});

module.exports = mongoose.model('Chat', ChatSchema);
