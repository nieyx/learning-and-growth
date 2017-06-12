## 变量的解构赋值
[http://es6.ruanyifeng.com/#docs/destructuring]
+ 数组的解构赋值
+ 对象的解构赋值
+ 字符串的解构赋值
+ 数值和布尔值的解构赋值
+ 函数参数的解构赋值
+ 圆括号的问题
+ 用途


### 什么是解构
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