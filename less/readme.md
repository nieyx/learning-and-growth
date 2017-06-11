## Less的学习

+ 什么是less
+ 编译环境
+ less语法


### 什么是less
+ 类似js的jquery的库
+ 可以使用动态样式语言，
+ 使用css的语法，给css赋予了动态语言的特性
+ 变量，继承，运算，函数

### 编译环境
+ koala
+ node.js 库
+ 浏览器端编译

### less语法
+ 注释
	```less
		/*被编译指柔扔存在*/
		// 被编译之后不存在
	```
+ 声明变量
	```less
		@text_width:300px;
		.box {
			width: @text_width;
			height: @text_width;
			background: #f0f;
		}
	```

+ 混合
	> 原始的css书写中，如果一个div具有box属性类，并且还有一个border类，
	```css
		.box {
			width:300px;
			height:300px;
			background:#f0f;
		}
		.border {
			border:1px solid #000;
		}
	```
	```html
		<div class='box border'></div>
	```
	> 在less中可以混合书写
	```less
		@text_width:300px;
		.box{
			width:@test_width;
			height:@test_width;
			background:#f0f;

			.border
		}
		.border {
			border:1px solid #000;
		}
	```
	```html
		<div class="box"></div>
	```
