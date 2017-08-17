## js下的严格模式

1. 如何设置严格模式？
> 在代码段的首行，设置"use strict"

2. 使用场景 

```html
	<!-- 针对单个脚本 -->
	<script>
		"use strict"
		var  a = 1;
		console.log('strict')
	</script>
	<script>
		console.log('normal')
	</script>
	<!-- 针对单个函数 -->
	<script>
		function strict(){
			"use strict"
			console.log('strict')
		}
		
		function noStrict(){
			console.log('normal')
		}
	</script>
	<!-- 对于单个函数不利于文件的合并，用立即执行函数来 -->
	<script>
		(function(){
			"use strict"
		})();
	</script>
```

3. 严格模式对于js语法和行为的改变(10条)
全局变量的显示声明
静态绑定
增强安全措施
禁止删除变量
显示报错


3.1 全局变量的显示声明
```js
	// 在正常模式中，如果一个变量默认没有赋值，那么就是全局变量，
	// 但在严格模式中就报错,必须使用var来声明变量
	function strict(){
		"use strict";
		w = 1;
	}
	function noStrict(){
		y = 1;
	}
	strict();
	noStrict();
```
3.2 静态绑定
```js
	// 在严格模式下不支持编译时在创建函数的变量和方式，也就是说属性和方法属于那个对象在查 u 给你家爱你的时候就已经定了，不是在编译的时候确定
	// 创建了一个eval作用域
	"use strict"
	var x = 1;
	console.log(eval("var x = 5;x")) // 5
	console.log(x) //1

	// 如何使用非严格模式
	"use strict"
	var x = 1;
	console.log(eval("var x = 5;x")) // 5
	console.log(x) //5
```
3.3 增强安全措施
```js
	// 禁止this指向全局对象
	function strict(){
		"use strict"
		return !this // true 此时的this是undefined
	}
	function noStrict(){
		return !this // flase 因为此时的this指向的是全局
	}
	strict();
	noStrict();
```
3.4 禁止删除变量
```js
	// 禁止删除变量，只有当一个对象的属性值，就是configurable为true的时候菜可以删除
	"use strict"
	var a = 1;
	delete a ; //Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
	var  o  = Object.create(null, {'x': {
		value:1,
		configurable:true
	}})
	delete o.x // 返回true
```
3.5 显示报错
```js
	// 在严格模式下，对只读属性赋值，会报错，在飞严格模式下，对只读属性赋值，会失败，但是不会报错
	var o = {};
	Object.definedProperty(o, "v", {value:1, writable: true});
	o.v = 2 // 报错
```

