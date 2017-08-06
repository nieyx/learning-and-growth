面试题总结：
链接地址[http://www.imooc.com/article/10057]
### 2017年5月20日搜狗面试题
1. doctype的作用是什么?页面中有没有它的区别是?
2. w3c标准盒模型占位宽度是如何计算的?它与IE盒模型有什么不同?
3. 请说下移动端常见的适配不同屏幕大小的方法?
4. 一个高宽未知的图片如何在一个比它大的容器内水平垂直居中?
5. label标签的作用是什么?
6. 定义链接四种状态的伪类的正确书写顺序是?
7. 你知道的css选择器有哪些?
8. 下面两个div的间距应该是多少?为什么?
<div style="margin:5px"></div><div style="margin:10px"></div>
9. png8、png24的区别是什么?
10. png和jpg这两种图片格式分别适用的场景是?
11.请介绍下你知道的前端性能优化方法?
12. 页面导入样式时，使用link和 @import有什么区别?
13.请介绍下css中针对ie6-9常用的hack方法
14. Javascript的基本数据类型有哪些?
15.请介绍下Javascript原型、原型链的特点?
16.曾经用原生Javascript实现过什么功能?
17. 请用jquery和原生Js分别实现添加、移除、移动、复制、创建和查找DOM节点
18. 实时监测用户在input内输入的字符数应该监听哪个事件?
19. 遇到疑难问题时，你通常是如何解决的？最好举例说明
20. inline、inline-block-block的区别是?

### 2017年5月20日用友面试题 
1. 请写出以下代码运行结果
```js
	var fullName = 'langulage';
	var obj = { 
		fullName:'javascript', 
		props:{    
			getFullName:function(){      
				return this.fullName;
	    	}}  
	}
	console.log(obj.props.getFullName());  // undefined
	var test = obj.props.getFullName;  
	console.log(test()); // langulage
```
2. 请写出以下代码运行结果
```js
	var name = 'window';
	var Tom = { 
		name:"Tom", 
		show:function(){
			console.log(this.name);
		},
		wait:function(){
			var fun = this.show;
	   		fun();
	 	}
	};
	Tom.wait(); // window
```

3. 在String对象上定义一个repeatify函数。这个函数接受一个整数,来明确字符串需要重复几次。这个函数要求字符串重复指定的次数。比如: ‘abc’.repeatify(3); abcabcabc
```js
	String.protoType.repeatify = String.protoType.repeatify || function(times){
		var str = 'abc';
		for (var i=0;i<times;i++){
			str += this;
		}
		return str;
	}
	String.repeatify(3);
```
4. 正则匹配输出’hello[哈哈]world’
var str = 'hello<img src="haha.png" alt="哈哈" />world';
```js
	var str = 'hello<img src="haha.png" alt="哈哈" />world';
	var a = str.search('<');
	var c = str.match('<');
	var b = str.search('>');
	var d = str.match('>');
	console.log(a,c)
	console.log(b,d)
```
5. 请罗列常用清除浮动方案
6. 陈述Zepto tap事件点透的原因及解决方案
7. 解释一下Javascript 的同源策略，你所能了解到的ajax跨域解决方案以及各种方案的优缺点。
8. 罗表移动前端常用自适应解决方案
9. cookie、localStorage、sessionStorage三者优缺点，适用场景

### 2017年5月16日 汽车之家面试题
1.	复杂型数组重排，类似于数组去重?
2.	百度首页所有元素共有多少个标签?用原生JS编写
3.	require.js的实现原理
4.	require.js、sea.js和common.js的区别?
5.	简单的CSS问题

### 2017年5月16日 VIPKID的面试题
1.	bind方法的原理
2.	实现forEach
3.	移动端/PC端的区别
4.	你认为最好的代码是什么样子的？
5.	ES6了解过吗？
6.	替换域名 http://abc.com/a/b => localhost:8080/a/b
7.	如何实现前后端分离？如何约定API？
8.	前端构建流程
9.	在上一个公司里学到了什么？
10.	Angular/Vue/React如何选型?
11.	有没有别的公司offer?

### 2017年5月16日蚂蚁金服北京面试题
1.	面向对象
2.	闭包
3.	:display:inline-block有间隙如何处理？
4.	node.js
5.	expres.js 
6.	apply和call的区别
7.	css有哪几种选择器
8.	react原理
9.	说一下mvc框架
10.	http/https的区别
11.	原生ajax实现的步骤
12.	requirejs原理
13.	ajax/jsonp区别?jsonp原理
14.	为什么大部分网站css/js/img分不同域名引入
15.	页面重构分三个步骤，说说看？
16.	优化页面性能有哪几种方式？
17.	事件监听
18.	js上拉加载和下拉刷新的实现方法？
19.	es6语法新特性

### 2017并行科技前端面试题

1. css
1.1 简要手绘盒子模型，并对边框和边距进行标注?
1.2 界面div三平分除了flex布局外，简写其它两种布局代码?
2. javascrpt
2.1 es6中let const var的区别是什么?
2.2 对数组[5,6,6,7,8,8]进行去重，es5或者es6方法
2.3 谈谈对es6中=>的理解
2.4 点击一个按钮，发出ajax请求，如何防止 用户在此请求方式返回之前再次点击?
2.5 封闭一个深度克隆方法es5或es6?
2.6 请用正则校验身份号码，要求符合15位或18位，末尾可能是X
3. html5&css3
3.1 html5和css3新增了哪些标签和属性?
3.2 用css3写一个开关按钮，按下时置灰变色，并改变按钮文字(如按下之前是on,按下之后是off)
4. http
4.1 http和https请求的区别是什么？post请求和get请求的区别是什么?
5. 前端框架和模板
5.1 使用过的前端框架有哪些?
5.2 使用过的模板引擎有哪些?
5.3 使用过的模块加载器有哪些?
5.4 简写ReactNative中使用es5和es6如何绑定的this？
5.5 如何理解 前端MVC架构，简要画出流程图


### 58赶集
三面
1. var url = http://www.58.com?a=1&b=2$c
function fn(url){
}
实现fn(url)输出 {a:1,b:2,c:true}
2.post跨域请求和服务端交互的流程
3.常用状态码含义 (什么时候出现304 if-modify-since等 ,304是否向服务端发请求,304响应是否有body)
4.实现fn()排序
fn(3,6,4,1) 输出 [1,3,4,6]
fn(4,2,6)输出[2,4,6]
5.DOM diff原理?虚拟dom是否是fragment
6.typeof 1   typeopf "1"  typeof String 返回什么  (number string function 注意大小写)
7.cookie session的实现原理和机制
8.decodeURI  decodeURIComponent encodeURIComponent encodeURI区别

二面
1.网络安全问题(单点登录 outh认证 登录密码等敏感信息前端如何保证安全)
2.跨域问题怎么实现
3.团队管理的时间进度怎么控制
4.都用过哪些设计模式
5.数据结构和算法了解多少
6.分析自己做的项目的架构

一面
1.eval函数什么时候用到,有什么吭
计算某个字符串中的js代码
2.jq选择性能问题
3.jq defer函数怎么实现
4.requirejs实现原理  requirejs怎么实现就近加载模块
5.ajax原生怎么实现
6.描述redux流程
7.react怎么实现日志功能(中间件)
8.中间如果是异步怎么处理
9.后端nodejs代码用webpack打包的话会有什么问题(核心模块会被打包)
10.react里父组件 自组件之间的通信
11.正则表达式 '.' '+' '*' 分别表示什么
12.node模块中path.relative方法什么作用
13.说下你自己觉得最复杂的项目


### 百度互联网创投中心 2017.7.4
1.	常见的行内元素
2.	input标签中readonly和disabled的区别
3.	html新增了那些标签，input新增了哪些类型
4.	div居中
5.	css中的伪类
6.	判断数据类型的方法
7.	写下运行结果

```html
	<script>
		var x=1,y=z=0;
		function add(n){
			return n=n+1;
		}
		y=add(x); // 4
		function add(n){
			return n=n+3;
		}
		z=add(x); // 4

		// 相当于以下的函数
		var x=1,y=z=0;
		function add(n){
			return n=n+1;
		}
		function add(n){
			return n=n+3; // 将第一个函数覆盖
		}
		y=add(x); // 4
		z=add(x); // 4


		var myobj = {
			num:2,
			add:function(){
				this.num = 3;
				(function(){
					console.log(this.num); // undefined 函数被直接调用时，指向window或者undefined
					this.num = 4;
				})();
				console.log(this.num) // 3
			}
		} 

		var i;
		for ( i = 0; i++ < 3) {
			setTimeout(function(){
				return function(){console.log(i)}
			}(),0)
		} // 三个4

		for (var i=0;i<10;i++){
			// 第一次i=0，进入if判断，i=2，continue退出本次循环
			// i=2，i++之后，i=3，进入if判断，i=5，continue退出本次循环
			// i再次执行i++，i=6，不会进入if判断，执行i+=3，变成9
			// 最后循环外，i变成了9
			if (i<5) { 
				i+=2;
				continue;
			}
			i+=3;
			break;
			console.log(i); //  因为有break，所以并不会执行到这行代码
		}
		console.log(i);
	</script>
```
8.	js的继承方式，以下代码如何实现继承
```html
<script>
	function People(){
		this.type = '';
	}
	function Man(){
		this.name = '';
	}

	Man.protoType = new People();
</script>
```

9.给一个数组重新排序

```html
	<script>
		var arr = [12,1,2,3,23,45,7,8,0];

		// 实现方式1，用es6的方法
		var arrSort = [12,1,2,3,23,45,7,8,0,1,2,1,2,4,5,6,1];
		var s = arrSort.filter(function(ele, index, arr){
			return arr.indexOf(ele) === index
		})
		console.log(s)
		s.sort(function(x,y){
			if(x>y){
				return 1;
			}
			if (x<y) {
				return -1;
			}
			return 0
		})
		console.log(s)
		// 实现方法2
		var arrSort1 = [12,1,2,3,23,45,7,8,0,1,2,1,2,4,5,6,1];
		function arrSort(arr){
			var arr1 = [];
			for(var i=0;i<arr.length;i++){
				if(arr1.indexOf(arr[i]) === -1){
					arr1.push(arr[i])
				}
			}
			console.log(arr1)
		}
		arrSort(arrSort1);
	</script>

```
10.写出一个函数的序列化url
```js
	var url = 'http://3g.baidu.com?username=zhangsan&age=18&address=qweqwe'; // 转换成{'username':'zhangsan','age':'18','address':'qweqwe'}

	var urlStr = url.match(/\?+(\w+\=\w+\&*)+/);
	var urlArr = urlStr[0].slice(1).split('&'); // ['username=zhangsan','age=18','address=qweqwe']
	var urlObj = {};
	for (var i of urlArr){
		urlObj[i.slice(0,i.search('='))] = i.slice(i.search('=')+1)
	}
```

11.html5的websocket

12.跨域

13.移动设备的兼容处理，浏览器兼容的处理

14.正则表达式
match search replace slice split 
15.viewport 

16.数组的基本操作方法

17.css的3d变换的使用

18. 函数的颗粒化
[http://www.zhangxinxu.com/wordpress/2013/02/js-currying/]

19. 对象和对象永远不相等
+ 引用类型的比较，比较的的是内存的地址，指针不同
+ 复杂数据类型，分堆栈存储，栈中存储的是堆中的指针，因为指向不同，存储的内容不同

20. foreach 和 for in的区别

21. js中同步和异步的区别

22. 快递排序，冒泡排序，插入排序 

23. 兼容css3的样式

24. 变量的提升
est();
```

### 经典面试题
1. 变量的提升
```js
	function test() {
		console.log(a); // undefined
		console.log(foo()); // 2

		var a = 1;
		function foo() {
			return 2;
		}
	}

	t
2. this在js中的运行机制
```js
	var fullname = 'John Doe';
	var obj = {
		fullname: 'Colin Ihrig',
		prop: {
			fullname: 'Aurelio De Rosa',
			getFullname: function() {
				return this.fullname;
			}
		}
	};
	console.log(obj.prop.getFullname());  // 'Aurelio De Rosa'
	var test = obj.prop.getFullname; 
	console.log(test()); // John Doe
```

3. 原生native的方法
在String对象上定义一个repeatify函数。这个函数接受一个整数,来明确字符串需要重复几次。这个函数要求字符串重复指定的次数。比如: ‘abc’.repeatify(3); abcabcabc
```js
	String.protoType.repeatify = String.protoType.repeatify || function(times){
		var str = 'abc';
		for (var i=0;i<times;i++){
			str += this;
		}
		return str;
	}
```

4. call和apply
```js
	var fullname = 'John Doe';
	var obj = {
		fullname: 'Colin Ihrig',
		prop: {
			fullname: 'Aurelio De Rosa',
			getFullname: function() {
				return this.fullname;
			}
		}
	};
	var test = obj.prop.getFullname; 
	test.call(obj.prop) // Aurelio De Rosa
	test.bind(obj.prop)() // Aurelio De Rosa
```

5. scope 范围
```js
	(function() {
	    var a = b = 5;
	})();

	console.log(b); // 5,b是全局的变量
```


### 一起作业 2017.7.19
1. 行内元素和块级元素的区别
2. 如何理解高度塌陷，如何解决
3. display：none和visibility：hidden的区别
4. 举例说明js中的类和继承，写出demo
5. ajax的过程
6. 闭包
7. call和apply的区别
8. angular的双向数据绑定如何实现
9. git查看分枝上的修改文件


### 汽车之家 2017.7.20
1. 原型链
2. 闭包
3. ES6的优点
4. react.js的优缺点
5. webpack的优点
6. 现在做的项目，具体流程

### 滴滴出行 2017.7.20
1. 数组有哪些方法
2. 浏览器兼容性处理，移动端兼容性处理，不同设备，6,6plus ，2X，3X图如何处理
3. 浏览器加载，js和css分别怎么加载
4. 前端性能优化，项目中实际月到的
5. js的工程化，AMD，CMD，js的组件化
6. ES6中有哪些优点，promise如何使用
7. 打包压缩工具用过哪些
8. 上线构建的流程，构建中具体执行了哪些流程
9. 如何保证代码的高质量，如何自动化测试。如何自己搭建测试工具
10. 如何解决js文件加载慢，如何优化后端请求前端页面的速度
11. CDN缓存，当文件内容更改，但是没有更改文件名称，如何解决
12. 说一个遇到的过有挑战的项目


### 51talk 2017.7.25
1. &&与|| 和 &与|的区别
	- &与|是位运算符，但是也可以进行逻辑运算
	- a || b  如果a为true，那就返回a，如果a为false，那么句返回b
	- a | b，是要同时判断两侧的a，b
2. 正则匹配9位qq号码
3. js的继承方式
> 拷贝继承，原型继承，构造函数继承
4. 手写ajax请求
5. 多个ajax请求，如何判断完成全部的数据接收？
> 计数，每次请求完成后，count++，最后判断count的值是否和请求址相等，相等的话，就完成数据接收
6. jquery的深拷贝


### 美旅 2017.7.26
1. angular中什么事件可以触发脏检查，什么是angular的脏检查
2. angular中控制器中如何实现数据的传递
3. angular中service，provider和factory有什么不同
4. angular和jqueryyou 有和不同
5. node的中间件用过哪些
7. node中如何进行断点调试
8. js中严格模式和非严格模式有何不同
9. js冒泡原理与应用，什么事件不支持冒泡，js中事件捕获的应用
10. js实现快速排序
11. 封装一个函数，使得每次调用的时候，计数，知道是第几次调用这个函数
```js
	function count(){
		var self = this;
		this.count = 0;
		return function(){
			console.log(self.count++)
		}
	};	
	var c = count();
	c();
```
12. 闭包的应用
```js
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
		</ul>
		<script>
			var lis = document.getElementsByTagsName('li');
			for(var i=0,i<lis.length;i++){
				lis[i].onclick = function {
					alert(i);
				}
			}
		</script>
	</body>
	</html>
```
13. 浏览器的同源策略是什么，跨域的方式，各个方法的优缺点
14. 使用npm 安装包的版本时候，比如@^1.0.0 中^是什么意思
15. git origin 后面可以跟分支地址？

### 高德 2017.7.27
1. angular的双向数据绑定？
2. angular脏检查中的watch是如何实现的？有手动触发过脏检查么？
3. angular中如何实现父子controll之间的通讯，父子controll中的scope有什么关系？
> service,emit和borstcast
>
> 继承关系
4. ajax是如何进行数据传递的？ajax返回的状态码都有什么？302是什么意思？
5. angualr中的$http和$get有何不同？
6. 用递归的方式实现100的阶乘？
```js
	function f(n) {
		return (n > 1) ? n * f(n-1) : 1;
	}
	f(100);
```
7. 什么是闭包？闭包的缺点，如何解决？
8. 什么是原型链？



### 懂球帝 2017.7.28
1. 对象式编程和函数式编程有何不同？
2. 浏览器对css文件的加载方式是边下载边执行还是下载完在执行
3. 了解过vue么？
4. 重绘和重排有什么区别？
5. cookie localstorage sessionStorage 有什么区别，有没有遇到只能用cookie，不能用localstorage的

### 云鸟科技 2017.8.1
1. 对于input表单的date，如何实现一个选送的事件范围？

### 作业盒子 2017.8.4
1. JSONP的封装？
2. 两列布局，左侧固定，右侧随着窗口而变化？
3. bind方法的原理？
4. 了解过react？
5. angular的双向数据绑定如何实现？
6. 如下代码输出什么结果
```js
	// 1 
	var obj = {};
	console.log(obj.prototype)
	console.log(obj.__proto__)

	// 2
	function foo(){
		this.a = 'a';
		this.b = function(){
			console.log(this)
			console.log(this.a)
		}

		return this.b
	}
	foo(); 

	// 3
	function A(){}
	function B(name){
		this.name = name
	}
	function C(){
		this.name = 'tom'
	}
	A.prototype.name = 'zhangsan';
	B.prototype.name = 'zhangsan';
	C.prototype.name = 'zhangsan';

	var a = new A();
	var b = new B();
	var c = new C();

	console.log(a.name)
	console.log(b.name)
	console.log(c.name)

```
7. 了解过哪些模板引擎？





















