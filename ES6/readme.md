## ES6入门
[http://es6.ruanyifeng.com/]
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
	```
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