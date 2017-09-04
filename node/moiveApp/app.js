var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Moive = require('./models/moive');
// 使用underscore的extend的方法，来更新数据
var _ = require('underscore');
// process是node的全局变量，可以获得端口信息
var port = process.env.PORT || 3000;
//  web服务器
var app = express();

// 倒入工艺模块，来连接本地的数据库
mongoose.connect('mongodb://localhost/immoc');

// 设置视图的根目录
app.set('views', './views/pages');
// 设置默认的模版引擎
app.set('view engine', 'jade');
// 格式话表单的数据
app.use(express.bodyParser());
// 设置页面静态资源，去bower-components下查找
app.use(express.static(path.join(__dirname, 'bower_components')));
// 监听端口
app.listen(port);

// 在控制台输出，看是否可以成功的启动服务
console.log('moive started on port ' + port);

// 主要页面的路由
app.get('/',  function(req, res){
	// 实现首页的查询逻辑
	Moive.fetch(function(err, moives){
		if (err) {
			console.log(err);
		}

		res.render('index',{
			title: 'moiveApp 首页',
			moives: moives
		});
	});

	// res.render('index', {
	// 	title: 'moiveApp 首页',
	// 	moives:[
		// {
		// 	title: '机械战警',
		// 	_id: 1,
		// 	poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		// },
		// {
		// 	title: '机械战警',
		// 	_id: 2,
		// 	poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		// },
		// {
		// 	title: '机械战警',
		// 	_id: 3,
		// 	poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		// },
		// {
		// 	title: '机械战警',
		// 	_id: 4,
		// 	poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		// },
		// {
		// 	title: '机械战警',
		// 	_id: 5,
		// 	poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		// },
		// {
		// 	title: '机械战警',
		// 	_id: 6,
		// 	poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		// }
	// 	]
	// });
});

// 详情页内容
app.get('/moive/:id',  function(req, res){
	var id = req.params.id;

	Moive.findById(id, function(err, moive){
		res.render('detail', {
			title: 'moiveApp detail详情页',
			moive: moive
		});
	});
	// res.render('detail', {
	// 	title: 'moiveApp detail详情页',
	// 	moive:{
	// 		doctor: '大卫',
	// 		country: '美国',
	// 		title: '机械战警',
	// 		year: 2014,
	// 		poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
	// 		language: '英语',
	// 		flash: 'http://player/youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
	// 		summary: '《机械战警》（英语：RoboCop），是一部2014年美国科幻动作片，翻拍自1987年的同名电影，为机械战警系列的第四部作品。巴西导演何塞·帕蒂尔哈执导，乔尔·金纳曼、加里·奥德曼、迈克尔·基顿、塞缪尔·杰克逊、艾比·考尼什和杰基·厄尔·哈利主演。美国和英国于2014年2月14日上映[1]，台湾、香港和中国大陆分别在同年1月31日、2月13日和2月28日上映。'
	// 	}
	// });
});

// 后台录入页
app.get('/admin/moive',  function(req, res){
	res.render('admin', {
		title: 'moiveApp admin后台录入页',
		moive: {
			title:'',
			doctor:'',
			country:'',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language:''
		}
	});
});

// 在列表页点击更新之后，会重新回到后台录制恶意，将电影的数据传世话道表单中
app.get('/admin/update/:id', function(req,res){
	var id = req.params.id;
	if (id) {
		Moive.findById(id, function(err, moives){
			res.render('admin', {
				title: 'moiveApp` 后台更新页',
				moive: moives
			});
		});
	}
});
// 电影数据的存储，从后台录入页拿到的数据
app.post('/admin/moive/new', function(req, res){
	var id = req.body.moive._id;
	var moiveObj = req.body.moive;

	var _moive;

	if (id !== "undefined"){
		Moive.findById(id, function(err, moive){
			if (err){
				console.log(err);
			}

			_moive = _.extend(moive, moiveObj);
			_moive.save(function(err, moive){
				if (err){
					console.log(err);
				}

				res.resirect('/moive/' + moive._id);
			});
		});

	} else {
		_moive = new Moive({
			title: moiveObj.title,
			doctor: moiveObj.doctor,
			country: moiveObj.country,
			year:  moiveObj.year,
			poster:  moiveObj.poster,
			flash:  moiveObj.flash,
			summary:  moiveObj.summary,
			language: moiveObj.language
		});

		_moive.save(function(err, moive){
				if (err){
					console.log(err);
				}

				res.resirect('/moive/' + moive._id);
			});
	}
});
// 列表页
app.get('/admin/list',  function(req, res){
	Moive.fetch(function(err, moives){
		if (err){
			console.log(err);
		}

		res.render('list', {
			title: 'moiveApp list 列表页',
			moives: moives
		})
	});
	// res.render('list', {
	// 	title: 'moiveApp list 列表页',
	// 	moives: [
	// 		{
	// 			title:'机械战警',
	// 			_id: 1,
	// 			doctor: '大卫',
	// 			country: '美国',
	// 			year: 2014,
	// 			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
	// 			language: '英语',
	// 			flash: 'http://player/youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
	// 			summary: '《机械战警》（英语：RoboCop），是一部2014年美国科幻动作片，翻拍自1987年的同名电影，为机械战警系列的第四部作品。巴西导演何塞·帕蒂尔哈执导，乔尔·金纳曼、加里·奥德曼、迈克尔·基顿、塞缪尔·杰克逊、艾比·考尼什和杰基·厄尔·哈利主演。美国和英国于2014年2月14日上映[1]，台湾、香港和中国大陆分别在同年1月31日、2月13日和2月28日上映。'
	// 	}]
	// });
});