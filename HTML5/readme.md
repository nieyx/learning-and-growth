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

### HTML5新元素
文档地址[http://www.runoob.com/html/html5-new-element.html]
+ canvas,画布
	- canvas 通常通过脚本js来绘制
	- canvas 是个图形容器，是通过脚本js来绘制的图形
	```html
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>canvas</title>
		</head>
		<body>
			<canvas id="myCanvas"></canvas>
			<script>
				var canvas = document.getElementById('myCanvas');
				var ctx = canvas.getContext('2d');
				ctx.fillStyle = '#f00';
				ctx.fillRect(0,0,300,300);
			</script>
		</body>
		</html>
	```

+ 新媒体元素
	- audio 
		* 支持的格式mp3，wav，ogg
		* 在标签中放置的文本，可以在不支持的浏览器中显示
	```html
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>audio</title>
		</head>
		<body>
			<audio controls>
				<source src='http://www.runoob.com/try/demo_source/horse.ogg'>
				<source src='http://www.runoob.com/try/demo_source/horse.mp3'>
				你的浏览器不支持audio
			</audio>
		</body>
		</html>
	```
	- video
	```html
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>video</title>
		</head>
		<body>
			<video width='300' height='200' controls>
				<source src='http://www.runoob.com/try/demo_source/movie.mp4'>
				<source src='http://www.runoob.com/try/demo_source/movie.ogg'>
				你的浏览器不支持video
			</video>
		</body>
		</html>
	```




















