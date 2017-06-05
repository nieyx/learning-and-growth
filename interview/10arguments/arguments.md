## arguments

### 什么是arguments
> 1.是个js的关键字
>
> 2.arguments永远指向当前函数调用的所有参数
>
> 3.是个伪数组，不是真正的数组
> 
> 4.仅在函数内部有效，在函数外部引用会跑出异常错误

### arguments的应用

+ arguments.length判断传入参数的个数
	```js
		function foo(a,b){
			var i, reset = [];
			if (arguments.length > 2) {
				for(i = 2;i<arguments.length;i++) {
					reset.push(arguments[i]);
				}
			}
			console.log(a,b); // 1,2
			console.log(reset); // [3,4,5]
		}
		foo(1,2,3,4,5)
	```
	> *ES6*中，使用的reset，可以直接获得不匹配实参的个数,reset参数只可以放在后面，之前使用*...*
	```
		function foo(a,b,...reset) {
			console.log(a,b) // 1,2
			console.log(reset); // [3,4,5]
		}
		foo(1,2,3,4,5)
	```

+ arguments.caller与arguments.callee的差别
	> 1.arguments.callee :被调用者
	>> 在es5的严格模式中删除了
	>>
	> 2.arguments.caller : 调用者
	>> 在es5的严格模式中删除了
	>>
	>> 现在调用的方式arguments.callee.caller
	>
	>注：在严格模式下，caller和callee都会报错


	- 应用案例1
	```js
		var read = function(){
			console.log(arguments.caller); // go
			console.log(arguments.callee); // read
		};
		var go = function(){
			read();
		}
		go();
		// 实际上上述返回的是undefined和read，这是因为caller的使用已经废弃了，
		// 要修改成
		var read = function(){
			console.log(arguments.callee.caller); // go
			console.log(arguments.callee); // read
		};
		var go = function(){
			read();
		}
		go();
	```
	- 应用案例2-递归
	```js
		function factoritol(num){
			if (num <= 1) {
				return 
			} else {
				return num*arguments.callee(num-1);
			}
		}
		factoritol(100);
	```

