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
	> 在less中可以混合书写,还可以为混合添加参数
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
		// 当border样式不满足一个尺寸时候，可以通过添加参数来解决
		.box_text {
			width:@text_width;
			height:@text_width;

			@border_width1(30px) // 没有初始值时，括号内一定要带参数，否则会报错

			@border_width2() // 使用时括号内部不传递值，则使用默认值20px
			@border_width2(10px) // 使用传递值，则为传递值
		}
		.border_width1(@border_width){
			border:solid #f00 @borfer_width;
		}
		// 当大多数都是30px，个别的是10px，还可以为参数设置初始值
		.border_width2(@border_width2:20px){
			border:soliod #f00 @border_width;
		}

		// 案例radius
		.border_radius(@border:5px){
			-webkit-border-radius:@radius;
			-moz-border-radius:@radius;
			border-radius:@radius;
		}
		.radius_test{
			width:100px;
			height:40px;
			background-color:green;

			.border_radius(10px);
		}
	```
	```html
		<div class="box"></div>
	```

+ 匹配模式
> 类似与js中的if，满足条件后才能匹配
```less
	// 画三角
	.sanjiao {
		width:0;
		height:0;
		overflow:hidden;

		border-width:10px;
		border-color:transparent transparent red transparent;
		border-style:dashed dashed solid dashed;
	}

	// 匹配模式画三角
	.triangle(top,@w:5px,@color:#ccc){
		border-width:@w;
		border-color:transparent transparent color transparent;
		border-style:dashed dashed solid dashed;
	}
	.triangle(bottom,@w:5px,@color:#ccc){
		border-width:@w;
		border-color:transparent transparent color transparent;
		border-style:solid dashed dashed dashed;
	}
	.triangle(@_,@w:5px,@color:#ccc){
		// 不管比配模式选择了谁，都会带上@_
		width:0;
		height:0;
		overflow:hidden;
	}
	.sanjiao {
		.triangle(top);
	}

	// 匹配模式的定位
	.pos(r){
		position:relative;
	}
	.pos(a){
		position:absilute;
	}
	.pos(f){
		position:fixed;
	}
	.piple {
		.pos(r) // 使用相对定位
	}
```
