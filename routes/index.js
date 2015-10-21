var express = require('express');
var router = express.Router();
//var Chat = require('../models/Chat.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET chat page. */
router.post('/chat/', function(req, res, next) {
	  nombre = req.body['nick'];
	  /*idUser = elSocket;
	  var chat = new Chat({
		  'id': idUser,
		  'username': nombre
	  });
	  chat.save(function(err, chat){
		    if(err) {
		      return res.send('500: Internal Server Error', 500);
		    }
	  });*/
  	  res.render('chat', { nombre: nombre });
});

module.exports = router;
