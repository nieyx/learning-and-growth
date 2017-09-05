## mongoose 对mongodb进行建模
模式 schema
模型 model
文档 documents


1. 在模式中，对字段类型进行定义
```js
	var mongoose = require('mongoose');

	var MovieSchenma = new mongoose.Schema({
		title:  String,
		doctor:  String,
		country:  String,
		year:Number,
		poster:  String,
		flash:  String,
		summary:  String,
		language:  String
	})
```

2. mongoose.model 对传入的模式schema进行编译，会生成构造函数
```js
	var mongoose = require('mongoose');

	var MovieSchema = require('../schemas/movie.js')
	var Moive = mongoose.model('movie', MovieSchema);

	module.exports = Moive;
```

3. 在有了数据库模型之后，就可以进行文档实例化
```js
	var mongoose = require('mongoose');

	var Movie = require('../models/movie.js')

	var movie = new Movie({
		title: "机械战警",
		doctor:'何塞.帕迪利亚',
    country:"美国",
    year:2014
	})
	<!-- 调用save方法，用来存储数据 -->
	moive.save(function(err){
		if (err){
			console.log(err);
		}
	})
```

4. 数据库批量查询和单条查询
```js
	var Movie = require('../models/movie.js')
	<!-- 批量查询 -->
	app.get（'/', function(req. res){
		Movie
			.find({})
			.exec(function(err, movies){
				res.render('index', {
					title:'首页',
					movies: movies
				})
			})
	})
	<!-- 单条查询 -->
	app.get('/', function(req,res){
		Movie
			.findOne({_id:id})
			.exec(function(err, movies){
				res.render('index', {
					title: '首页',
					movies:movies
				})
			})
	})
```

4. 数据库单条删除
```js
	var Movie = require('../models/movie.js')
	
	<!-- 单条删除 -->
	app.get('/', function(req,res){
		Movie
			.remove({_id:id}, function(err, movies){
				if (err){
					console.log(err)
				}			
			})
	})
```