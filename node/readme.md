##node.js

## nodejs介绍
1. nodejs是什么
	+ 是一种服务端语言
	+ 其他的服务端语言的处理方式
		- java，php等服务端语言中，为每一个客户端创建一个新的线程，
		- 如每个线程需要2M的内存，那么8G的内存服务器，大约可以处理4000个链接
		- web服务器支持更多的用户---> 增加服务器的数量---> web应用程序的成本就增加---> 成本增加
		- 在技术层面层面上，同一个用户的不同客户端的请求，可能会被不同的服务器处理，这就需要在所有的服务器上共享所有的资源

	+ 服务端语言的瓶颈是**服务器支持最大的同时链接用户量**，处理大量的并发请求

2. nodejs能解决什么问题
	+ node改写了服务端到客户端的链接方法
	+ node为每个客户端链接触发一个nodejs内部进行处理的事件

3. nodejs适合解决什么问题
	+ 可以处理大量的并发请求
	+ 提供了大量的api，
	+ 在V8的javascript引擎中，提供了一种全新的编译技术，使其效率提高

4. nodejs中的异步I/O和事件环机制
	+ 异步I/O和事件环机制，使得nodejs具有高性能
	+ 什么是异步的I/O
		- 传统的js，是单线程的，nodejs也是单线程的
		- 当访问数据库的去的搜索结果的时候，在开始访问，和数据库返回结果之前，中间存在一段等待的时间
			* 在传统的js中，整个线程都要暂定，等待数据库内容的返回后，才可以继续执行
			* 在 nodejs中，在执行访问数据库代码之后，立即执行其后面的代码，把数据库返回的结果放在**回调函数**中执行，
		- 提高了执行的效率
	+ 什么是事件环
		- 在传统的js中，有到那个用户鼠标点击按钮，或是输入文字等操作，而触发事件
		- 在nodejs中，没有传统js中的事件，但是有数据库请求建立的链接，通过此链接而接受数据库提交数据，停止客户端提交数据的接受行为而触发的事件
		- 在node中，在一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数的中途，可以处理其他事件，然后返回继续执行原事件的回调函数，这种处理机制成为**事件环机制**


## nodejs中的模块
1. 传统的js文件中，可以将js代码分割成几个js文件，然后在浏览器中将这个代码合并运行
2. nodejs中是通过**模块**为单位，来分隔了多有的功能
3. 每一个文件就为一个模块
4. 每一个模块内定义的全局变量或是函数的作用范围被限定在这个模块内
5. 只有export对象能将一个模块内的变量或事函数传递到外部


###  nodejs 创建一个简单的http服务
```js
	var http = require('http'); <!-- 引用模块 -->

	http.createServer(function(req, res){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('hello world\n');
	}).listen(1337, '127.0.0.1');
	console.log('server is running at http://127.0.0.1');
```

### nodejs的运行环境与浏览器的不同
1. 浏览器的全局window上挂载了一些方法
2. node的全局属性是挂在在process上的

### nodejs的模块与commonjs规范
1. js编程中可能遇到的问题
+ 用function定义全局的函数，但是当有多人协作的时候，引入大量的js文件的时候，就可能出现全局变量被覆盖，方法被重写的情况----js缺少模块的管理机制，不能够来隔离不同模块的开发，一般我们的处理方式是：**命名空间的方式**，将变量和方法限制在一个作用域内

2. commonjs
+ 模块的定义，模块的标示，模块的引用

3. nodejs中使用了commonjs
+ 每一个js文件，都是一个独立的模块
+ 因为nodejs是commonjs的，所以可以加载大量的其他模块，来实现功能

### 模块的流程
+ 创建模块
> teacher.js
+ 导出模块
> exports.add = function(){}
+ 加载模块
> var teacher = require('./teacher')
+ 使用模块
> teacher.add('')

### nodejs API

1. url与uri
+ url 定位：统一资源定位符 
+ uri 标示：统一资源标示符号 uri > url
+ url模块[https://nodejs.org/dist/latest-v6.x/docs/api/url.html]
	- url.parse('str')
	- url.formate({})
	- url.resolve('str', 'str')

2. querystring
+ querystring.stringify({},'','')
	- 第一个参数是传递的要进行序列化的对象
	```js
		querystring.stringify({username:'tom',password:123456,address:'beijing'})

		// result
		'username=tom&password=123456&address=beijing'
	```
	- 第二个参数是每组序列化之后的对象中间的链接符号，默认是&
	```js
		querystring.stringify({username:'tom',password:123456,address:'beijing'}, ',')

		// result
		'username=tom,password=123456,address=beijing'
	```
	- 第三个参数是每组对象中的链接符号，默认是=
	```js
		querystring.stringify({username:'tom',password:123456,address:'beijing'},'&',':')

		// result
		'username:tom&password:123456&address:beijing'
	```
+ querystring.parse
	- 第一个参数是传递要进行反序列化的字符串
	- 第二个参数是按照什么方式来解析
	- 第三个参数是按照什么方式来解析
	- 第四个参数是传递支持的个数，最多是1000个

+ querystring.escape
> 对字符进行转义
```js
	querystring.escape('哈哈')
	<!-- result -->
	'%E5%93%88%E5%93%88'
```
+ querystring.unescape
> 对字符进行转义
```js
	querystring.unescape('%E5%93%88%E5%93%88')
	<!-- result -->
	'哈哈'
```

3. http
+ 什么是http及相关的知识
	- 什么是http
		1. 一种协议
		2. 客户端发送请求，创建端口
		3. http服务端在端口监听客户端的请求
		4. http服务器像客户端返回状态和内容
	- dns解析
		1. chrome搜索自身的DNS缓存，
		2. 搜索操作系统自身的dns缓存（chrome://net-internals/#dns）
		3. 读取本地的host文件
		4. 浏览器发起一个dns的调用
		5. 拿到地址后，进行三次握手

+ 状态码
+ 1XX 请求已经接收成功，继续处理
+ 2XX 请求已经成功接收，并已经处理
+ 3XX
+ 4XX 客户端错误，请求有语法错误 ，或者请求无法实现
+ 5XX 服务端错误，

+ 常用的状态码的值
```js
	200 ok 
	400 有语法错误
	401 有请求，没授权 
	403 受到请求，拒绝授权，
	404 not found 
	500 服务端发生错误
	503 暂时不能处理客户端的请求，
```

+ http模块
	- 什么是回调
	- 什么是同步／异步
	- 什么是i/o
	> 数据的输入输出
	- 什么是单线程和多线程
	- 什么是阻塞／非阻塞
	- 什么是事件
	- 什么是事件驱动
	- 什么是基于事件驱动的回调
	- 什么是事件循环


+ 事件模块-events
	- event暴露出去一个eventEmmit的对象
	- 支持最大的事件为10个



### express中间件
1. 什么是express，有什么功能？
	+ express是一个功能极简，由路由和中间件构成的一个web开发框架，
	+ 从本质上来说，一个Express的应用，就是在调用各种的中间件

2. 什么是express中间件？
	+ 中间件（middleWare）是一个函数，
	+ 可以访问请求对象，响应对象，和web处于请求和响应循环流程中的中间件，一般被命名为next的变量

3. 中间件的功能















