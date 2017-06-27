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
		<video width='300' height='200' controls >
			<source src='http://www.runoob.com/try/demo_source/movie.mp4'>
			<source src='http://www.runoob.com/try/demo_source/movie.ogg'>
			你的浏览器不支持video
		</video>
	</body>
	</html>
```

	- source 
		* 提供媒体支持的类型，常嵌套在video，audio中，
		* 让浏览器选组其中任意个类型，都支持，则任选其一
		* 支持src：路径属性，type：媒体的MIME类型属性

	- embed
		* 嵌入其他的插件
		* 常用属性
		> width/height,src,type
```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>embed</title>
	</head>
	<body>
		<embed src="http://www.runoob.com/try/demo_source/helloworld.swf" type="" width='200' height='200'>
	</body>
	</html>
```
+ 新的表单元素
	- datalist
		* 定义了input标签的可能选型列表
		* IE9以下，safari不支持

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>datalist</title>
	</head>
	<body>
		<form action="*.php">
		<input type="text" list='num'>
		<datalist id='num'>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</datalist>
		<input type="submit">
		</form>
	</body>
</html>
	```
	- output
		* 输出结果
		* oninput 关系表达式
		* name 对象的唯一名称

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>output</title>
	</head>
	<body>
		<form action="*.php" oninput="x.value= parseInt(a.value)+parseInt(b.value)">0
		<input type="range" id='a' value='100'>100
		+ <input type="text" id='b' value='50'>
		= <output name='x' for ='a b'>
		</form>
	</body>
	</html>
```

+ 新的语义和结构元素

### canvas
+ 什么是canvas
> 画布，是个容器，内部通过脚本js来绘制图形
>
> canvas标签内可以设置style样式

```html
	<canvas id='myCanvas' width='200' height='200' style='border:1px solid #f00'></canvas>
```
+ 使用js脚本来绘制图像
> 获取画布，设置类型，设置样式

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>canvas</title>
	</head>
	<body>
		<canvas id='myCanvas' width="300" height="300"></canvas>
		<script>
			var c = document.getElementById('myCanvas'); // 获取画布
			var ctx = x.getContext('2d'); // 设置类型
			ctx.filleStyle = '#f00';
			ctx.fillRect(0,0,400,400)

		</script>
	</body>
	</html>
```

+ 在画布上绘制线条
> moveTo : 起始坐标点
>
> lineTo : 结束坐标点
>
> strock() 来绘制线条

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>draw</title>
	</head>
	<body>
		<canvas id="a" width="400" height='400' style="border:1px solid #f00"></canvas>
		<script>
			var c = document.getElementById('a');
			var ctx = c.getContext('2d');
			ctx.moveTo(10,10);
			ctx.lineTo(200,200);
			ctx.stroke();
		</script>
	</body>
	</html>
```

+ 绘制圆形
> arc(x,y,r,start,stop)

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>arc</title>
	</head>
	<body>
		<canvas id="b" width="400" height='400' style="border:1px solid #f00"></canvas>
		<script>
			var c = document.getElementById('b');
			var ctx = c.getContext('2d');
			ctx.arc(200,200,200,0,2*Math.PI);
			ctx.stroke();
		</script>
	</body>
	</html>
```

+ 绘制文本
> font,fillText(text,x,y),strokeText(text,x,y)

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>canvas Text</title>
	</head>
	<body>
		<canvas id="c" width="400" height='400' style="border:1px solid #f00"></canvas>
		<script>
			var c = document.getElementById('c');
			var ctx = c.getContext('2d');
			ctx.font = '30px MicroSoft YaHei';
			ctx.fillText('hello word!!', 50, 50)
		</script>
	</body>
	</html>
```

### 拖放
+ 将元素设置为可拖放 draggable="true"
+ 当元素拖动时，会发生什么ondragstart setData() 
+ 放到何处 ondragover
+ 进行放置 ondrop

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>drag/drop</title>
		<style type="text/css">
		#div1, #div2
		{float:left; width:100px; height:35px; margin:10px;padding:10px;border:1px solid #aaaaaa;}
		</style>
	</head>
	<body>
		<script>
			function allowDrop(env){
				env.preventDefault();
			}

			function drag(env){
				env.dataTransfer.setData("Text", env.target.id);
			}

			function drop(env){
				env.preventDefault();
				var data = env.dataTransfer.getData("Text");
				env.target.appendChild(document.getElementById(data));
			}
		</script>
		<div id="div1" ondragover="allowDrop(event)" ondrop="drop(event)" >
			<img src="http://www.runoob.com/try/demo_source/img_w3slogo.gif" alt="" width="88" height="31" dragable='true' ondragstart="drag(event)">
		</div>
		<div id="div2" ondragover="allowDrop(event)" ondrop="drop(event)"></div>
	</body>
	</html>
```

### 新的input类型
+ 在不支持新的input类型的浏览器中，input会显示成文本域
> color
>
> date/datetime/datetime-local
>
> email
>
> mouth/time/wek
>
> number
>
> range
>
> search
>
> tel
>
> url

+ color
```html
	<input type="color" name="" id="">
```
+ date 
```html
	<input type="date" name="" id="">
```

















