## 函数

### 函数的调用
+ 函数在定义的时候不会被执行，只有被**调用**的时候才会执行

+ 函数调用的几种方法
	- 作为函数
	- 作为方法
	- 作为构造函数
	- 通过call和apply来间接调用

+ 函数的调用
	- 使用调用表达式
	- 调用表达式：在函数名称后面添加个括号
	- 立即执行函数，在定义的时候，在末尾直接加上括号
		```js
		var fun1 = function () {
		return console.log(111)
		}
		fun1(); // 函数调用

		var fun2 = (function () {
			return console.log(111)
		}()) // 立即执行函数
		```
	- 函数的调用，一般不使用this，但是可以通过使用this，来判断，是否为严格模式
		```js
		var strict = function(){
			return !this;
		}();
		```

+ 方法的调用
	- 方法：保存在对象属性里的javaScript函数
	- 例子
		```js
		o.m = f; // 对象o的m属性添加了f的方法
		o.m // 调用时
		o.m(x， y) // 传递参数时

		```
	- <strong>函数的调用和方法的调用，最显著的区别</strong>
		* <strong>调用上下文this</strong>
		* 属性表达式 o.m(对象o，属性m)中，对象o构成了调用上下文，函数体可以使用this来引用该对象
			```js
			var calculator = { // 对象的直接量
				operand1: 1;
				operand2: 2;
				add : function() {
					// this关键词，此时指向当前的对象
					return this.result = this.operand1 + this.operand2;
				}
			}
			calculator.add(); // 3
			calculator.result;  // 3
				
			```
		* 调用上下文的this只想当前对象的原理
			> 
			>	任何函数被当作用函数的方法调用时，都会传递一个隐式的参数
			>
			>	这个参数实际上是一个对象
			>
			>	方法调用的母体就是这个对象
			>
			>	**隐士参数** ---> **隐士对象** ---> **调用对象的母体**
		* this
			+ this是是一个关键字，不能被赋值
			+ this没有没有作用域的限制，嵌套的函数不会从调用他的函数中继承this

		* this 的指向
			> 嵌套函数被当作**方法**来调用时：this指向**调用的对象**
			>
			> 嵌套函数被当作**函数**来调用时：this指向**全局对象**或者**undefined**

			```js

			var o = {
				m: function(){
					var self = this;
					console.log(this === o);
					f();

					function f() { // 定义一个嵌套函数f
					console.log(this === o);
					console.log(self === o)
					}
				}
			}
			```
+ 构造函数的调用
	- 什么是构造函数调用：在函数或者方法调用之前，使用**new**关键字，就构成构造函数的调用
		```js
			var o = new Object();
			var o = new Object; // 没有传递参数时，可以省略括号
		```
	- 构造函数中this的指向
		> 1.构造函数调用的时候，**创建了一个新的对象**;新对象继承了构造函数的*prototype*的属性，
		>
		> 2.构造函数*初始化*新创建的对象，并对这个对象调用上下文，
		>
		> 3.构造函数可以使用this关键字来引用这个新创建的对象

+ 间接调用
	- call apply
	- 可以将call(),apply()看作是函数的某个方法，任何函数可以调用任何的方法
		```js
			// 调用o函数的f方法
			f.call(o,1,2)
			f.apply(o,[1,2])
			// 上述表达式等价于
			o.m = f;
			o.m();
		```
	- 其中，call和apply中第一个实参，会变成this的值

### 函数的作用域	

+ 变量的作用域
	- 变量作用域：一个变量的作用区域
		> 全局作用域和函数作用域
		> 
		> 全局变量具有的全局作用域，在javaScript的任何地方都是有定义的
		> 
		> 局部变量：在函数体内声明的变量，在函数体内有定义

		```js
			var scope = 'global';
			function checkscope(){
				scope = 'local'; // 修改了全局变量
				var scope = 'loacl';
				return scope;
			}
			checkscope(); // local
			scope  // local

			//  函数的定义是可以嵌套的
			var scope = 'global scope';
			function checkscope(){
				var scope = 'local scope';
				function nested(){
					var scope = 'nested scope';
					return scope;
				}
				return nested();
			}
			checkscope() // nested scope

		```

+ 函数的作用域和声明提前
	- 函数的作用域
		> js与c类的编程语言的区别
		> 
		> c: 块级作用域
		>> 花括号内的每一段代码，都有各自的作用域
		> 
		> js： 函数作用域
		>> 在函数体的声明的变量，在函数体内，以及在函数体内嵌套的函数都是有定义的
		```js
			function test(o){
				var i = o; // i在函数体内都是有定义的
				if (typeof o == "object"){
					var j = 0; // j在函数体内有定义的，不仅仅是在这个代码段内
					for (var k=0;k<10;k++){ // k在函数体内有定义，不仅仅在循环内哟定义
						console.log(k); // 输入0-9
					}
					console.log(k); // 输出
				}
				console.log(j) //j已经定义了，但是可能没有初始化
			}
		```
	- 声明提前
		> 什么叫函数的声明提前？
		> 
		> js的函数作用域是指在函数内声明的所有变量在函数体内是**始终可见的**
		> 
		> 始终可见：意味着变量在声明之前就已经可用了
		>
		>这种特性被叫做函数的声明提前

	- 声明提升的解析步骤
		> 预编译
		声明提升
		解析代码


	- 声明提升的案例
		```js
			var scope = 'global';
			function f() {
				console.log(scope); // undefined
				var scope = 'local';
				console.log(scope); // local
			}
 			// 上述代码等价于
 			var scope = 'global';
			function f() {
				var scope;
				console.log(scope); // undefined
				scope = 'local';
				console.log(scope); // local
			}
		```

	- 解决函数声明提升的方法
		> **让变量声明和使用变量的代码尽可能的靠近**

+ 作用域链
	- 变量的解析过程
	> 将*局部变量*看作是一个*自定义对象的属性*，
	> 
	> 1.每一段js(全局代码或函数)代码，都有一个与之关联的作用域链，
	>
	> 2.作用域链是*对象列表*或者*链表*，这组*对象*定义了这段*js代码*中的“作用域”的*变量*
	>
	> 3.当js代码段，需要查找变量x的值的时候(变量的解析)
	>> 3.1 从链表的第一个对象开始查找，
	>>> 有：使用这个对象的x的值
	>>>
	>>> 没有：会在链表上查找下一个对象，以此类推，
	> 
	> 如果列表上的最后一个对象也没有x的值，则认为不存在x，则跑出异常


+ 高阶函数
	- map/reduce
		* map是属于array的方法，在括号内传递自定义的函数，就会得到新的array
			```js
				function pow(x) {
					return x * x;
				};
				var arr = [1,2,3,4];
				arr.map(pow); // [1,4,9,16]
			```
		* map可以计算任何的复杂的运算
			```js
				var arr = [1,2,3,4];
				arr.map(String); // [‘1‘,‘2‘,‘3‘,‘4‘]
			```
	- filter
		* 通常用来过滤数组
		* filter(function(element,index,arr))括号中接受函数
		* 根据函数返回的结果，true／false，来判断是否添加到数组中
			```js
				// 取出数组中的奇数
				var arr = [1,2,3,4];
				var r = arr.filter(function(x){
					return x % 2 !== 0;
				})
				r; // 1,3

				// 删除数组中空的字符串
				var arr = ['A', '', 'B', null, undefined, 'C', '  '];
				var r = arr.filter(function(ele){
					return ele && ele.trim(); // IE9+
				})
				r; // ['A', 'B', 'C']

				// function回调函数中，有多个参数
				var arr = [1,2,3,4];
				var r = arr.filter(function(element,index,arr){
					console.log(element); // 1,2,3,4
					console.log(index); // 0,1,2,3
					console.log(arr); // [1,2,3,4]
				})

				// 去重
				var arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
				var r = arr.filter(function(ele,index,arr){
					return arr.indexof(ele) === index; // 利用数组中每一项都有唯一索引值，来去重
				})
			```
		* 
	- sort
		* sort对数组进行排序
		* sort会修改原数组，
		* sort()是根据ascii进行排序，对数字排序时候，10 > 20,所以要使用高阶函数
		```js
			// 高阶函数数组数字排序
			var arr1 ,arr2 = [1,10,2,20,20,10,1,2];
			arr1 = arr2.filter(function(ele,index,arr){
				return arr.indexOf(ele) === index;
			})
			arr1.sort(function(x,y){
				if (x>y) {
					return 1;
				}
				if (x<y) {
					return -1;
				}
				return 0;
			});
			arr1; // [1,2,10,20]
		```

## 闭包
+ 什么是闭包
	- 高阶函数，除了有可以传递函数功能，也可以返回函数
	- 当相关的**参数和变量**都保存在**返回的函数中**--closure闭包
+ 闭包的应用
	- 函数求和
		```js
			// 直接返回求和结果
			var sum = function(arr) {
				return arr.reduce(function(x,y){
					return x+y;
				})
			};
			sum([1,2,3,4]) // 10

			// 若不想直接返回，在需要的时候在计算，就可以使用闭包
			var lazy_sum = function (arr) {
				var sum = function(){
					return arr.reduce(function(x,y){
						return x+y
					})
				}
				return sum; // 在函数中返回了sum函数，sum函数可以使用lazy_sum中的局部变量
			}
			var f = lazy_sum([1,2,3,4]);
			f(); // 10,在每次调用f()的时候才计算求和
		```
	- 在对象内部封闭私有变量
		```js
			// 例1
			function create_counter(inital){
				var x = inital || 0;
				return {
					inc: function(){
						return x+=1
					}
				}
			}
			var c1 = create_counter();
			c1.inc();
			var c2 = create_counter(10);
			c2.inc();

			// 例2
			var foo = {
				secret: 'secret',
				get_secret:function(){
					return this.secret;
				},
				set_secret:function(x){
					return this.secret = x;
				}
			};
			foo.get_secret(); // 获取属性值
			foo.set_secret('global'); // 修改属性值
		```
		
		



