## 项目所用的技术栈
1. node + express
2. mongoose
3. moment.js js的处理日期的类库
4. jade 模版引擎
5. 使用bower安装jquery和boostrap类库（.bowerrs来设置路径）
## mongoose 对mongodb进行建模
模式 schema
模型 model
文档 documents


1. 在模式中，对数据字段类型进行定义
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

5. 在命令行删除moogodb的数据
+ 输入mongo进去mongdb的模式
+ use 数据库的名字 （use movieApp）
+ db.movies.find({}) 查询所有的数据
+ db.movies.find({}).count() 查看数据的条数
+ db.movies.remove() 删除全部数据









