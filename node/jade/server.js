var http = require('http');

var jade = require('jade');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"content-type": "text/jade"});

	var fn = jade.compile('div #{course}', {});
	var html = fn({"course": "jade"});


	var htmlText = jade.renderFile('index.jade', {
		"course":"jade course",
		pretty: true
	});
	res.end(htmlText);
	// res.end(html);

}).listen(1337, '127.0.0.1');

console.log('listening 1337');