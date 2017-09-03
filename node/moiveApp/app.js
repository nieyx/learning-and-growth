var express = require('express');
// process是node的全局变量，可以获得端口信息
var port = process.env.PORT || 3000;
//  web服务器
var app = express();

// 设置师徒的根目录
app.set('views', './views');
// 设置默认的模版引擎
app.set('view engine', 'jade');

// 监听端口
app.listen(port);

// 在控制台输出，看是否可以成功的启动服务
console.log('moive started on port ' + port);

// 主要页面的路由
app.get('/',  function(req, res){
	res.render('index', {
		title: 'moiveApp 首页'
	});
});

app.get('/moive/:id',  function(req, res){
	res.render('detail', {
		title: 'moiveApp detail详情页'
	});
});

app.get('/admin/moive',  function(req, res){
	res.render('admin', {
		title: 'moiveApp admin后台录入页'
	});
});

app.get('/admin/list',  function(req, res){
	res.render('list', {
		title: 'moiveApp list 列表页'
	});
});