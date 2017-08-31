var ws = require('nodejs-websocket');

var port = 3001;
var server = ws.createServer(function(conn){
	console.log(' New connection');

	conn.on('text', function(str){
		console.log('received ' + str );
		conn.sendText(str.toUpperCase() + '!!!');
	});

	conn.on('close', function(code, reason) {
		console.log('connection closed');
	});
	// 如果没有监听error的事件，在关闭标签页之后，会在终端报错，
/*	{ Error: read ECONNRESET
    at exports._errnoException (util.js:1018:11)
    at TCP.onread (net.js:568:26) code: 'ECONNRESET', errno: 'ECONNRESET', syscall: 'read' }
*/	
		conn.on('error', function(err) {
		console.log(err);
	});
}).listen(port);

console.log('you server is listening at 3001');