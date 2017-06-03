## 函数

#### 函数的调用
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
	```
	var fun1 = function () {
		return console.log(111)
	}
	fun1(); // 函数调用

	var fun2 = (function () {
		return console.log(111)
	}()) // 立即执行函数
	```
	- 函数的调用，一般不使用this，但是可以通过使用this，来判断，是否为严格模式
	```
		var strict = function(){
			return !this;
		}();
	```

+ 方法的调用
	- 方法：保存在对象属性里的javaScript函数
	- 例子
	```
		o.m = f; // 对象o的m属性添加了f的方法
		o.m // 调用时
		o.m(x， y) // 传递参数时
	```
	- <strong>函数的调用和方法的调用，最显著的区别</strong>
		* <strong>调用上下文this</strong>
		* 属性表达式 o.m(对象o，属性m)中，对象o构成了调用上下文，函数体可以使用this来引用该对象
		```
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
			
			
		代码区域块
			var a = function(){
			}
		



