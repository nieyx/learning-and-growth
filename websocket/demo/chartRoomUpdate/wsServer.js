// 使用原生的websocket的方式
// var ws = require('nodejs-websocket');
// var port = 3000;
// var clientCount = 0;
// var server = ws.createServer(function(conn){
// 	clientCount++;
// 	conn.nickname = 'user ' + clientCount;
// 	var mes = {};
// 	mes.type = 'enter';
// 	mes.con = conn.nickname + 'comes in';
// 	broadcast(JSON.stringify(mes));
// 	conn.on('text', function(str){
// 		var mes = {};
// 		mes.type = 'message';
// 		mes.con = conn.nickname + ' : ' + str;
// 		broadcast(JSON.stringify(mes));
// 	});

// 	conn.on('close', function(){
// 		var mes = {};
// 		mes.type = 'leave';
// 		mes.con = conn.nickname + ' : '+ 'leave';
// 		broadcast(JSON.stringify(mes));
// 	});
// }).listen(port);

// function broadcast(str){
// 	server.connections.forEach(function(item){
// 		item.sendText(str);
// 	});
// }

console.log('your server is listening at port 3000');
// 使用socket.io的方式

var app = require('http').createServer();
var io = require('socket.io')(app);
var port = 3000;
app.listen(port);
var clientCount = 0;
io.on('connection', function(socket){
	clientCount ++ ;
	socket.nickname = 'user' + clientCount;
	io.emit('enter',socket.nickname + ' comes in');

	socket.on('message', function(data){
		io.emit('dataMessage', socket.nickname + ' : ' + data);
	});

	socket.on('disconnect', function(){
		io.emit('leave',socket.nickname + ' leaves');
	});
});
