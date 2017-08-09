## js的模块化
文档地址[http://www.ruanyifeng.com/blog/2012/10/javascript_module.html]
文档地址[http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html]
文档地址[http://caibaojian.com/javascript-module.html]

### js的模块化
1. 问什么会有模块化的概念？
+ 当一个项目开发的越来越复杂，会遇到一些问题：
	- 命名冲突： 不同的工作人员，把变量都暴露在全局上，会使得代码被覆盖
	- 文件依赖： 比如使用boostrap的时候，会将jquery优先引入

+ 在使用模块开发时，会避免以上的命名冲突和文件依赖的问题
	- 使得效率更高，让其他人拿来就用，同时由于模块分的很清晰，会方便后期维护

2. 模块化的演变过程
+ 函数----对象的封装，命名空间----私有成员的分离

### js的模块的写法
1. 原始写法
> 不同的函数简单的放在一起，可以看成是一个模块
```js
	function f1 () {
		var ff = '123'
		console.log(ff)
	}
	function f1 () {
		var ff = '456'
		console.log(ff)
	}
	f1(); // 456
	// 缺点：污染了全局变量，当设置了相同的变量名，那么后者会覆盖前者，并且模块的成员之间看不出关系

```

2. 对象写法
> 将属性和方法放置在一个对象中,这种方法不会全局变量
```js
	var obj = {
		count: 1,
		f1: function () {
			console.log(this.count)
		},
		f2: function () {
			console.log(this.count + 1)
		}
	}
	obj.f1(); // 1
	obj.f2(); // 2
	// 方法的弊端，对象内部的属性可以被改变
	obj.count = 2;
	obj.f1(); // 2
	obj.f2(); // 3
```

3. 立即执行函数的写法
> 避免外界修改函数内部的属性
```js
	var m = (function(){
		var count = 0;
		var m1 = function(){
			console.log(count)
		};
		var m2 = function(){
			console.log(count)
		}
		var obj = {
			m1: m1,
			m2: m2
		}
		return obj;
	})();
	m.m1(); // 0,暴露出去的只是一个对象，
```

### js中如何规范的使用模块
1. 为什么要使用模块
	+ 因为有了模块，就可以很方便的使用别人的代码，想要什么模块直接加载就可以
	+ 但是每个人的编码风格都不同，现有的模块规范有AMD，CMD，commonjs

2. 什么是commonjs
	+ nodejs首先引入了commonjs的模块化
	+ 每个文件都是一个模块
	+ 通过require引入模块，require是一个全局的方法

	```js
		var math = require('math');
		math.add(2, 3);
	```

3. 浏览器环境
> 对于commonjs模式的代码，如下，有个问题
```js
	var math = require('math');
	math.add(2, 3);
```
+ 在浏览器中，对于上述代码，要想使用math的函数，需要等待math模块加载完成
+ 在服务端，代码都是存储在本地磁盘上，所以加载很快，同步加载没有问题
+ 但是在浏览器中，是从服务器上请求资源，同步加载会耗时，可能会造成页面假死
+ ** 所以对于浏览器来说，同步模块不适合，所以引出了AMD异步加载模块**

### AMD异步模块加载
+ 模块的加载并不影响后面的代码执行，
+ 所有依赖这个语句的代码都放在一个回调函数中
+ 等语句执行完后，才会执行回调函数中的代码
+ AMD模块也采用require引入，但是它有两个参数require(url, callback)

```js
	require(['math'], fucntion(math){
		math.add(2,3);
	})
```

+ require.js 是基于AMD模块化的

### CMD异步模块加载
+ cmd和amd的不同之处，是对于**依赖模块的执行时机不同**

```js
	defined(function(require, exports, module){
		var clock = require('clock');
		clock.start();
	})
```





















