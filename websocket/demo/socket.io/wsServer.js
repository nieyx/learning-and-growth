var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3000);

function handler(req, res){
	fs.readFile(__dirname + '/index.html',
	function(err, data){
		if (err) {
			res.writeHead(500);
			return res.end("err loading index.html");
		}
	});
}

io.on('connection', function(socket){
	socket.emit('news', {hello: 'world'});
	socket.on('my other event', function(data){
		console.log(data);
	});
});

console.log('your server is listening at port 3000')