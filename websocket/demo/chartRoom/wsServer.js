var ws = require('nodejs-websocket');


var port = 3000;
var clientCount = 0;
var server = ws.createServer(function(conn){
	// 创建一个变量，用来标记当前server的使用者
	clientCount ++;
	conn.nickName = 'user' + clientCount;
	var mes = {};
	mes.type = 'enter';
	mes.content = conn.nickName + 'comes in';
	broadcast(JSON.stringify(mes));
	conn.on('text', function(str){
		console.log('received message' + str);
		// 定义一个 broadcast 的方法，来通知ws下所有的客户端新的连接进入服务器
		var mes = {};
		mes.type = 'message';
		mes.content = conn.nickName + ':' + str;
		broadcast(JSON.stringify(mes));
	});

	conn.on('close', function(){
		console.log('connection closed');
		var mes = {};
		mes.type = 'leave';
		mes.content = conn.nickName + 'leave';
		broadcast(JSON.stringify(mes));
	});

	conn.on('error', function(err){
		console.log('handle error');
		console.log(err);
	});
}).listen(port);

console.log('you server is listening at port 3000');

function broadcast(str){
	// server下所有的连接，都发送一个提示状态，来达到广播的功能
	server.connections.forEach(function(connection){
		connection.sendText(str);
	});
}
