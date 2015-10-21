var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var ChatSchema = new Schema({ 
	id: 'String',
	username: 'String'
});

module.exports = mongoose.model('Chat', ChatSchema);
