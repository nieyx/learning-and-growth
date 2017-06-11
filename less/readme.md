## Less的学习

+ 什么是less
+ 编译环境


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
+ 声明变量
	```less
		@text_width:300px;
		.box {
			width: @text_width;
			height: @text_width;
			background: #f0f;
		}
	```