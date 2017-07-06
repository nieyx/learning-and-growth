## css伪类和伪元素[http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/]
> 出现的目的是为了格式化文档以外的东西

### 什么是伪类和伪元素
1. **伪类**
	+ 为已有的元素处于**某个状态**时，为其添加css样式
	+ 这种状态根据用户的**行为**而**动态的变化**
	+ 例子
		- 当用户悬停在指定元素上时，可用通过：hover来描述这个状态
		- 虽然它和普通的css类似，可以为已有的元素添加样式，
		- 但是他是处于dom树无法描述的状态下才为其添加的样式，所以将其称之为伪类
2. **伪元素**
	+ 伪元素为其创建一些不存在的元素，为其添加样式
	+ 例子
		- 可以通过before在一个元素前增加一些文本，并为文本添加样式
		- 用户可以看到这些文本，但是在文档树中却没有

### 伪类和伪元素的区别
> 有没有创建文档树以外的元素+ 伪类：是为已有的元素添加样式
+ 伪元素：是创建了一个文档树以外的元素

```html
	// 案例,为ul的第一个子元素添加颜色
	<style>
		.list1 li:first-child {
			color:red		}
	</style>
	// 直接操作元素的标签，传统的方法
	<ul class="list">
		<li style="color:red">list1</li>
		<li>list2</li>
	</ul>
	// 操作伪类
	<ul class="list1">
		<li>list1</li>
		<li>list2</li>
	</ul>
```

### 伪类和伪元素的应用
> 为了验证兼容行，可以先在网站验证其兼容性	[http://caniuse.com/#home]
![](../../image/pseduo-class/pseduo.png)
![](../../image/pseduo-class/pseduo-class.png)

### 伪类根据状态分类：LVHA
+ link：a标签默认的状态
+ visited： a标签被访问过之后的状态
+ hover： a标签悬浮上去的状态
+ active： a变迁标签被点击时的状态
+ focus： 选择获取焦点的输入字段


### 伪类的解构化
+ not 否定类，除了某一项外，其他的都添加样式

```html
	<style>
		.first-item {
			color:#00f;
		}
	</style>
	<ul class="lilist">
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
	</ul>
```

+ first-child 匹配元素的第一个子元素
+ last-child 匹配元素的最后一个子元素

```html
	<style>
		li:first-child {
			color: #f00;
		}
		li:last-child {
			color:#f00;
		}
	</style>
	<ul class="ullist">
		<li>123</li>
		<li>123</li>
		<li>123</li>
	</ul>
```

+ nth-child 匹配特定数字的子元素

```html
	<style>
		li:nth-child(2n+1) {
			color:#f0f;
		}
	</style>
	<ul class="ul1">
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
		<li>7</li>
		<li>8</li>
		<li>9</li>
		<li>0</li>
	</ul>
```

### 与表单相关的伪类
+ :checked

```html
	<style>
		input:checked + label {
			color:#f0f;
		}
	</style>
	<div class="input">
		<input type="text" name="" id="input">
		<label for="input"></label>
	</div>
```

+ disale 匹配禁用的表单元素

```html
	<style>
		:disable {
			opacity: .5;
		}
	</style>
	<div class="disable">
		<input type="text" disabled>
	</div>
```

### 伪元素
+ :before
> 在被选元素之前插入内容，要用content属性来插入内容，被插入的内容不存在与dom树中

```html
	<style>
		h1:before {
			content: 'hello';
		};
	</style>
	<h1>world!</h1>

```

+ :after
> 在被选元素之前插后内容，要用content属性来插入内容，被插入的内容不存在与dom树中

```html
	<style>
		h1:before {
			content: 'hello';
		};
	</style>
	<h1>world!</h1>

```
+ :first-letter
> 匹配文档的首字母

```html
	<style>
		h2:first-letter {
			color:#f00;
		}
	</style>
	<h2>hello world !!!</h2>

```
+ :first-line
>匹配元素的第一行

```html
	<style>
		p:first-line {
			color:#f0f;
		}
	</style>
	<p class="line1">
		Hello World, and wish you have a good day!
		<br>
		Hello World, and wish you have a good day!
		<br>
		Hello World, and wish you have a good day!
		<br>
	</p>
```
+ ::selection
> 被用户选中的部分，只支持双引号

```html
	<style>
		::selection {
			background-color: #aeaeae;
		};
	</style>
	<p>Hello World, and wish you have a good day!</p>

```




























