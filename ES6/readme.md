## ES6入门
[http://es6.ruanyifeng.com/#docs/let]
### let和const
+ let
	> 用来声明变量
	>> let : 声明局部变量，变量指在声明的代码块内有效
	>> const: 

	```js
		// let的局部声明
		{
			let a = 1;
			let b = 2;
		}
		a // a is not defined
		b // b is not defined
	```
+ let和var的差别
	```js
		// var是全局声明，let是块级作用域
		var a = [];
		for(var i = 0; i<10; i++){
			a[i] = function(i){
				cosole.log(i);
			}
		}
		a[5](); // 10

		var b = [];
		for(let i = 0;i<10;i++){
			b[i] = function(){
				conosole.log(i)
			}
		}
		b[5](); // 5

		// 分析上述案例
		// 1. var是全局声明，声明的i是一个全局变量，全局只有一个变量i，当循环结束后，变量i被赋值为10
		// 2. let是块级声明，声明的变量指在局部有效，每一次循环输出的i都是一个新的变量
		//
		//
	```
+ 不存在变量的声明提升
	> var 声明的变量，在函数体／js代码段内是始终可见的，
	这就意味着，在变量没有被声明时，就可以使用了，返回的是undefined
	> 
	> let改变了上述的语法行为，let所声明的变量，一定要在变量的声明后使用，
	若提前引用，则抛出错误
	```js
		console.log(foo1);
		var foo1 = 123;
		foo1 //

		console.log(foo2);
		let foo2 = 123; 
		foo2 //
	```
+ 暂时性死区-temport dead zone --tdz
	> 只要块级作用域内使用let命令，let命令所声明的变量就绑定到这个区域，不在受外部的影响
	```js
		var a = 123;
		if (true) {
			a = 1234; // a is not defined
			let a ;
		}
	```

+ 不允许重复声明
```js
	// 不允许重复声明变量
	(function(){
		var a = 1;
		let a = 2;
	})(); // a has been declared

	// 不允许重复声明参数
	(function(arg){
		let arg = 1;
	})(1)  // arg has been declared
```

+ ES6的块级作用域
```js
	// es5中使用的var
	var f1 = function(){
		var a = 1;
		if (true){
			console.log(a); // 1
			var a = 2;
		}
		console.log(a); // 2
	};
	f1();

	// es6中的块级作用域
	var f2 = function(){
		let a = 1;
		if (true){
			console.log(a); // a is not declared
			let a = 2;
		}
		console.log(a); // 1
	};
	f2(); // 块级作用域，不会影响块外
```

### const
> 常量的声明，声明之后不可修改
>
> 与let具有相同的使用方法
>> 1. 不可重复声明同一个常量
>> 2. 没有变量的声明提升
>> 3. 具有暂时性死区

```
	const PI = 3.1415;
	PI; // 3.1415

	PI = 3 // Assignment to constant variable 报错
```

### 顶层对象的属性
> ES5
>> 浏览器的顶层对象是window，node环境中顶层对象是global
```js
	var a = 1;
	window.a // 1

	b = 2;
	window.b // 2
```
> ES6
>> ES6中兼容了ES5中的方式，用var声明的全局变量仍然属于顶层的window／global，
>> 但是有let和const声明的全局变量，不属于顶层对象

```js
	let a = 1;
	window.a // undefined
```

## 变量的解构赋值
[http://es6.ruanyifeng.com/#docs/destructuring]
+ 数组的解构赋值
+ 对象的解构赋值
+ 字符串的解构赋值
+ 数值和布尔值的解构赋值
+ 函数参数的解构赋值
+ 圆括号的问题
+ 用途


## 什么是解构
> ES6允许按照一定的模式，从数组和对象中*提取出数值*，对*变量进行赋值*，被称为*解构*
>> 提取数值-----> 变量赋值

### 数组的解构赋值
> 变量的声明
```js
	let [a,b,c] = [1,"",undefined];
	a // 1
	b // ""
	c // undefined

	// 等式右严格按照左侧来解析
	let [a,[b,c],d] = [1,[2,3],4]
	a // 1
	b // 2
	c // 3
	d // 4
```

> 默认值
```js
	// es6内部会严格判断变量是否===undefined，如果等于，则才会使用默认值
	let [a,b=1] = ["",undefined]; // a = "",b = 1

	let[a=1,b=2] = [null,undefined]; // a=null,b=2
	
```

> 当默认值是一个表达式，
```js
	function f(){
		console.log('aaa');
	}

	let [a = f()] = [1];
	// 上述声明不会生效，因为a=1，函数不会被调用
	// 上述表达式等于
	let a;
	if ([1][0] === undefined){
		a = f();
	} else {
		a = [1][0];
	}

```

> 默认值引用其他的变量
```js
	let [x=1,y=x] = [] // 1，1
	let [x=1,y=x] = [1] // 1，1
	let [x=1,y=x] = [1,2] // 1，2
	let [x=y,y=1] = [] //报错，x在用到y值时，y还未声明

```

### 对象的解构赋值

### 变量的结构赋值的用途
> 1.交换变量的值
>
> 2.函数返回的多个值
>
> 3.函数参数的定义
>
> 4.提取JSON数据
>
> 5.遍历map结构

1.变量交换值
```js
	let x = 1;
	let y = 2;
	[x,y]=[y,x];
```

2. 函数返回的多个值
```js
	// 返回一个数组
	function example(){
		return [1,2,3];
	}
	let [a,b,c] = example();

	// 返回一个对象
	function example(){
		return {
			foo:1,
			bar:2
		};
	}
	let {foo,bar} = example();
```

3.函数参数的定义
```js
	// 参数是有序的值
	function f([a,b,c]){}
	f([1,2,3])
	// 参数是无序的值
	function f({x,y,z}){}
	f({x=1,z=3,t=2})
```

4.提取json数据
```js
	// 
	let jsonData = {
		name:'tom',
		age:18,
		data: [123,456] 
	};
	let [name,age,data=number] = jsonData;
```
5.遍历map
```js
	// 
	var map = new Map();
	map.set('first', 'hello');
	map.set('second', 'world');

	for(let [key,value] of map){
		console.log(key +' is '+ value);
	}

```

## 字符串的扩展
> 1.字符串Unicode表示法
>
> 2.codePointAt()
>
> 3.String.fromCodePoint()
>
> 4.字符串的遍历器接口
>
> 5.at()
>
> 6.normalize()
>
> 7.includes(),startsWidth(),endsWith()
>
> 8.repeat()
>
> 9.padStart(),paEnd()
>
> 10.模板字符串
>
> 11.实例：模板编译
>
> 12.标签模板
>
> 13.String.raw()
>
> 14.模板字符串的限制


1. 字符的unicode表示法
- js允许采用\uxxxx形式表示一个字符，xxxx代表unicode的码点
```js
	'\u0061' // a
```
- 表示法限于\u0009~\uffff之间的字符安，超出这个范围的字符，需使用两个双字节的形式来表示
```js
	'\uD842\uDFB7' // 𠮷
	‘\u20BB7’ // 7
```
- es6改进了，如果直接在\u后跟着超过0xffff的数值，比如‘\u20bb7’,js将其解析为\u20bb + 7，\u20bb是一个不可打印的字符，所以只会显示一个空格，后面跟着一个7，es6改进，*将码点放入大括号，js就可正确解析*
```js
	"\u{20BB7}"// "𠮷"

	"\u{41}\u{42}\u{43}" // "ABC"

	let hello = 123;
	hell\u{6F} // 123

	'\u{1F680}' === '\uD83D\uDE80' // true
```

10. 模版字符串
文档地址[http://es6.ruanyifeng.com/#docs/string]
	+ 传统的js语言中，输出的字符串拼接方式如下
	```js
		$('#result').append(
			'there are <b>' + basket.count + '</b>' + 
			'items in your basket,' + 
			'<em>' + basket.onSale + 
			'</em> are on sale!'
		)
	```
	+ 传统方式的拼接比较复杂繁琐不方便，es6引入*模板字符串*来解决这个问题
	```js
		// 模板字符串，用反引号`标示，嵌入的变量要用${}来标示,反引号也可以当作字符串
		$('#result').append(`
			there are <b> ${basket.count}</b> items
			in your basket, <em>${basket.onSale}</em>
			are on dale!
		`)
	```
	+ 如果反引号中又有反引号，则使用反斜杠转译
	```js
		var greeting = `\`yo\` world`;
	```
	+ 如果在输出的模板字符串中，有多行字符串，会保留行内的空格和缩进，如要删除空格，
	```js
		$('#list').html(`
			<ul>
				<li>first</li>
				<li>second</li>
			</ul>
		`)
		// 去除空格
		$('#list').html(`
			<ul>
				<li>first</li>
				<li>second</li>
			</ul>
		`.trim())
	```

	+ 案例
	```js
		var x = 1;
		var y = 2;
		`${x} + ${y} = ${x+y}` // 1+2=3

		var obj = {x:1,y:2};
		`${obj.x + obj.y}` // 3
	```

11.实例：模板编译
+ 模板字符串，生成正式模板的实例
```js
	// <% %> 放置js代码
	// <%= %> 放置表达式
	var template = `
		<ul>
			<% for(var i=0l i<data.supplies.length; i++){% >
				<li><%= data.supplies[i]%></li>
			<% } %>
		</ul>
	`;
```


























