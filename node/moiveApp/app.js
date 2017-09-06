var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Movie = require('./models/movie');
var User = require('./models/user');
var bodyParser = require('body-parser');
var _ = require('underscore');
// process是node的全局变量，可以获得端口信息
var port = process.env.PORT || 3000;
//  web服务器
var app = express();
app.locals.moment = require('moment');// c传入本地的数据库
// mongoose.createConnection('mongodb://localhost/movieApp');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/movieApp', {server: { poolSize: 5 }, useMongoClient: true});
// 设置视图的根目录
app.set('views', './views/pages');
// 设置默认的模版引擎
app.set('view engine', 'jade');
app.use(bodyParser.json()); // for parsing application/json
 
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//http://www.expressjs.com.cn/guide/using-template-engines.html
// 设置静态资源的 默认路径
app.use(express.static(path.join(__dirname,'/public')));
// 监听端口
app.listen(port);

// 在控制台输出，看是否可以成功的启动服务
console.log('movie started on port ' + port);

// 主要页面的路由
app.get('/',  function(req, res){
  Movie.fetch(function(err, movies){
    if (err){
      console.log(err);
    }

    res.render('index', {
      title: 'movieApp 首页',
      movies: movies
    });
  });
	
});
// 详情页信息
app.get('/movie/:id',  function(req, res){
  // 通过url的参数值，就可以获取到id
  var id = req.params.id;
  Movie.findById(id, function(err, movie){
    res.render('detail', {
      title: 'movieApp' + movie.title,
      movie: movie
    });
  });
});
// 后台录入页
app.get('/admin/movie',  function(req, res){
	res.render('admin', {
		title: 'movieApp admin后台录入页',
		movie:{
      title:"",
      doctor:"",
      country:"",
      year:"",
      poster:"",
      flash:"",
      summary:"",
      language:""
    } 
	});
});

//admin update movie,拿到数据后更新表单
app.get('/admin/update/:id',function(req,res){
   var id = req.params.id;
   if(id){
      Movie.findById(id,function(err,movie){
        res.render('admin',{
            title:'imooc 后台更新页',
            movie:movie
        });
      });
   }

});

// 后台录入页提交表单之后，数据内容的存储
app.post('/admin/movie/new', function(req, res){
  // 从表单提交的数据，可能是新添加的，页可能是修改之后再提交的
  // 所以要做个判断，判断是哪种情况
  var id = req.body.movie._id;
  var movieObj = req.body.movie;
  console.log(req.body);
  // 修改原有之后的提交
  if (id !== 'undefined'){
    Movie.findById(id, function(err, movie){
      if (err){
        console.log(err);
      }

      _movie = _.extend(movie, movieObj);
      _movie.save(function(err, movie){
        if (err){
          console.log(err);
        }
        // 数据更新完成，重定向到详情页
        res.redirect('/movie/' + movie._id);
      });
    });


  } else {
    _movie = new Movie({
      doctor:movieObj.doctor,
      title:movieObj.title,
      country:movieObj.country, 
      language:movieObj.language,
      year:movieObj.year,
      poster:movieObj.poster, 
      summary:movieObj.summary,
      flash:movieObj.flash     
    });

    _movie.save(function(err,movie){
        if (err) {
            console.log(err);
        }

        res.redirect('/movie/' + movie._id);
    });

  }
});


// 列表页
app.get('/admin/list',  function(req, res){
	Movie.fetch(function(err, movies){
    if (err){
      console.log(err);
    }

    res.render('list', {
      title: 'movieApp 列表页',
      movies: movies
    });
  });
});

// 删除逻辑路由
app.delete('/admin/list', function(req, res){
  // 从请求的url来获取id值，获得id值之后，可以将数据从数据库中删除
  var id = req.query.id;
  if (id){
    Movie.remove({_id:id}, function(err, movie){
      if (err) {
        console.log(err);
      } else {
        // 当没有错误的时候，返回json数据，返回1
        res.json({success: 1});
      }
    });
  }
});

// 接受用户注册的路由逻辑
app.post('/user/signup', function(req, res){
  // 拿到用户请求的数据,此时的user是一个对象，因为body-parser是一个中间件，它的功能就是将请求的数据转换成为一个对象
  var _user = req.body.user; 
  // console.log(_user); // { name: '1', password: '2' }
  // 通过req.param req.query获取id，param获取的可能是从query获取的，页可能是从query获取的
  // ／user/singup/1111？useid=1112 和请求的userid （“useid”： 1113} 
  // 先拿url中拿1111，没有就拿body中的1113，
   // 在没有拿query1112，有个优先级的关系


   
   User.find({name: _user.name}, function(err, user){
    if(err){
      console.log(err);
    }

    if (user){
      res.redirect('/');
    } else {
      var user = new User(_user);
      user.save(function(err, user){
      if (err){
        console.log(err);
      }

      // console.log(user);
      // 重定向到首页
      res.redirect('/admin/userlist');
     });
    }
   });
   
});

// user列表页
app.get('/admin/userlist',  function(req, res){
  User.fetch(function(err, users){
    if (err){
      console.log(err);
    }

    res.render('userList', {
      title: 'movieApp 用户列表页',
      users: users
    });
  });
});