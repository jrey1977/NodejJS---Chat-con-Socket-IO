var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost/test');


var mongodbUri = 'mongodb://heroku_gqb3tr50:r22sg8c10850si7utsm4e3nj40@ds041494.mongolab.com:41494/heroku_gqb3tr50';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var ChatSchema = new Schema({
  id: 'String',
  username: 'String'
});

module.exports = mongoose.model('Chat', ChatSchema);
