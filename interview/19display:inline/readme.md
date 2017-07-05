## 去除间隙的方法
文章链接地址[http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/]

### 现象的描述
+ 行内元素，或者设置了display：inline-block属性而变成了行内元素的标签，展示的时候，就会有间距

```html
	<style>
		.alist a {
			display: inline-block;
			background: #f0f;
			padding: .5em 1em;
		}
	</style>
	<div class="form">
		<input type="text" name="" id="">
		<input type="button" value="按钮">
	</div>
	<div class="alist">
		<a href="#">这是一个按钮1</a>
		<a href="#">这是一个按钮2</a>
		<a href="#">这是一个按钮3</a>
	</div>
```
### 出现间距的主要原因
+ 是因为标签的空格

### 1.去除空格的方法
> 去除标签的空格后，显示正常，没有间距

```html
	<style>
		.alist a {
			display: inline-block;
			background: #f0f;
			padding: .5em 1em;
		}
	</style>
	<div class="form">
		<input type="text" name="" id=""><input type="button" value="按钮">
	</div>
	<div class="alist">
		<a href="#">这是一个按钮1</a><a href="#">这是一个按钮2</a><a href="#">这是一个按钮3</a>
	</div>
```

### 2.借助注释
```html
	<style>
		.alist a {
			display: inline-block;
			background: #f0f;
			padding: .5em 1em;
		}
	</style>
	<div class="form">
		<input type="text" name="" id=""><!-- 
		 --><input type="button" value="按钮">
	</div>
	<div class="alist">
		<a href="#">这是一个按钮1</a><!-- 
		 --><a href="#">这是一个按钮2</a><!-- 
		 --><a href="#">这是一个按钮3</a>
	</div>
```

### 3.让闭合标签吃胶囊
> 闭合标签不封闭

```html
	<style>
		.alist a {
			display: inline-block;
			background: #f0f;
			padding: .5em 1em;
		}
	</style>
	<div class="alist">
		<a href="#">这是一个按钮1
		<a href="#">这是一个按钮2
		<a href="#">这是一个按钮3</a> <!-- 问了兼容ie的浏览器，最后一个标签必须闭合 -->
	</div>
	<!-- 在h5中，可以直接省去最后一个 -->
	<div class="alist">
		<a href="#">这是一个按钮1
		<a href="#">这是一个按钮2
		<a href="#">这是一个按钮3
	</div>
```

### 为display：inline-block的父元素设置font-size
```html
	<style>
		.fs {
			font-size:0;
		}
	</style>
	<div class="fs">
		<img src="http://image.zhangxinxu.com/image/study/s/s128/mm1.jpg" />
	    <img src="http://image.zhangxinxu.com/image/study/s/s128/mm2.jpg" />
	</div>
```

### 设置word-spacing

```html
	<style>
		.ws {
			word-spacing: -8px;
		}
		.ws	a {
			background: #f0f;
			display: inline-block;
			padding: .5em 1em;
			word-spacing: 0;
		}
	</style>
	<div class="ws">
		<a href="#">123123</a>
		<a href="#">123123</a>
		<a href="#">123123</a>
		<a href="#">123123</a>
	</div>
```





















