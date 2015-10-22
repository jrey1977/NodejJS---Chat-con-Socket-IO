var mongoose = require('mongoose'),
Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost/test');

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://heroku_gqb3tr50:Zapatero2!@ds041494.mongolab.com:41494/heroku_gqb3tr50';

// The http server will listen to an appropriate port, or default to
// port 3000.
var theport = process.env.PORT || 3000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

var ChatSchema = new Schema({
	id: 'String',
	username: 'String'
});

module.exports = mongoose.model('Chat', ChatSchema);
