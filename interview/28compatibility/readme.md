## 兼容性

> 主流浏览器分成ie，chrome，safari，opera

+ 浏览器的兼容，分为 ie6，7，8和ie9+ chrome，safari


### H5标签的兼容性
> h5添加了许多的新标签，如header，section， footer等，但是ie9以下是不支持的，要做兼容

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>H5</title>
		<!-- 引入兼容文件，这个文件会docuemnt.createElement标签元素，并将其设置为块级元素 -->
		<link rel="stylesheet" href=".../html5shiv.js">
	</head>
	<body>
		<header></header>
		<section></section>
		<footer></footer>
	</body>
	</html>
```

### 元素浮动兼容性

### ie6下子元素的宽高超出父级元素的宽高，会把父级撑开

### p标签内不能在包含块级元素

### margin的兼容性问题
> 同级的元素，设置margin-top／margin-bottom时，会重合
>
> 解决方法：甚至相同的方向
>
> margin-top的传递问题：overflow:hidden; zoom:1;(触发bfc，兼容haslayout)

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>margin兼容性问题</title>
		<style>
			.container {
				width: 600px;
				height: 800px;
				margin: 0 auto;
				border: 1px solid #000;
			}
			.item {
				width: 100px;
				height: 100px;
				background: #f00;
			}
			.item1 {
				margin:50px;
			}
			.item2 {
				margin-top:50px;
				margin-bottom:100px;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="item item1"></div>
			<div class="item item1"></div>
			<hr>
			<div class="item item2"></div>
			<div class="item item2"></div>
		</div>
	</body>
	</html>
```

### display:inline-block
> 给块级元素设置display：inline-block之后，在非ie6的浏览器中，会按照块级元素显示
>
> 在ie6下使用hack的解决方案，*display:inline;*zoom:1

```css
	.display {
		display:inline-block; // 非ie6的处理
		*display:inline; // ie6
		*zoom:1 // ie6
	}
```

### ie6的最小高度的问题
> ie6下最小高度是19px，解决方法是overflow：hidden

```css
	.height {
		height：1px; // 非ie6的处理
		*overflow:hidden  // ie6
	}
```

### ie6的双边距问题
> 当一设置了左浮动之后，又设置了margin-left，在ie6，7下会有双边距的问题

```css
	.margin {
		width:100px;
		height:100px;
		float:left:
		margin-left:50px;
		*display:inline;
	}
```


###li元素中的子元素设置浮动，会导致li元素和li元素之间会有4px的间隙
> 解决办法：*vertial-align:top;

### ie6下的文字溢出问题
> 在父元素中的子元素有浮动，并且浮动元素之间有文字注释或者是行内元素

### ie67下父元素设置overflow:hidden是包不住设置了relative的子元素
> 解决方法： 父元素同样设置relative

### IE6下绝对定位元素父级宽高是奇数,绝对定位元素的right和bottom值会有1px的偏差
> 避免父级元素的宽高是奇数

### IE6 下input的空隙
> 给input标签加上float：left


### css的hack
> 针对不同的浏览器写不同的css的样式

```css
	// /9 兼容ie10以下的样式
	// *  兼容ie6，7的样式
	// _ 兼容ie6的样式
```

### png24的兼容













