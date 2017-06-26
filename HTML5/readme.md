## HTML5
文档地址[http://www.runoob.com/html/html5-intro.html]
### 什么是HTML5
+ 是新版本的HTMl的语言，具有新的元素的属性和行为
+ 具有更多样化的应用程序

### 具体的功能
+ 语义化
+ 连通性
+ 离线&存储
+ 多媒体video／audio
+ 2D/3D canvas
+ 性能
+ 样式访问
+ 样式设计


### 语义化
+ HTML5更新的功能
	> 新的节段和提纲
	> 
	> 使用了音频和视频
	> 
	> HTML5的表单
	> 
	> 新的语义元素
	> 
	> iframe的改进
	> 
	> MathML：允许直接嵌入数学公式
+ 新的节段和提纲

### HTML5对浏览器的兼容性处理
+ 在一些低版本的浏览器中，不支持html的新的语义标签，要做如下的兼容处理
	```css
		header, section, footer, nav, aside, main, article, figure {
			display: block;
		}
	```
+ 对于IE浏览器，html5做的兼容,条件注释，引用文件
	```html
		// 当浏览器的版本低于IE9时，引用此文件
		<!--[if lt IE 9]>
		  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		// 国内菜鸟镜像库
		<!--[if lt IE 9]>
		  <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
		<![endif]-->
	```

### 为HTMl添加新的元素
+ 创建新的元素
	```html
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>create element</title>
		</head>
		<script>
			document.createElement('myHero');
		</script>
		<style>
		myHero {
			display: block;
			background: grey;
			padding: 50px;
			font-size: 30px;

		}
		</style>
		<body>
			<p>这是一个普通的段落</p>
			<div>这是一个普通的容器</div>		
			<myHero>新创建的标签</myHero>
		</body>
		</html>
	```

<!-- ### HTML5新元素 -->



















