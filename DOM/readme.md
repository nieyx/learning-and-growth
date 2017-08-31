f## DOM
+ 什么是DOM
> document object model
> 一个页面，由html css js构成
>
> html 结构，css 样式，js 行为
>
> 通过js来控制页面，浏览器，如何获取，删除，修改，添加hTML元素的标准

+ 主要内容
- 滑动门特效
- 认识dom
- 文档与节点类型
- domready
- 元素节点类型的判断
- 元素节点继承的层次
- 元素节点的分类

+ 滑动门案例

```html
	<script>
		// 获取容器并获取所有的img标签
		var box = document.getElementById('container');
		// 每个间隙的距离
		var imgs = box.getElementsByTagName('img')
		// 滑动的距离
		var translate = 160;
		// 图片的宽度
		var imgWidth = imgs[0].offsetWidth();
		// 盒子的宽度及盒子的位置
		var boxWidth = imgWidth + translate * (imgs.length-1) + 'px';

		// 每个图片的初始位置
		function setImage(){
			for(var i=1, len = imgs.length;i<len;i++){
				imgs[i].style.left = imgWidth + translate * (i-1) + 'px';
			}
		}
		setImage();
		// 为每个图片绑定事件
		for(var j=1,j<=i;j++){
			(function(i){
					imgs[i].onmouseover = function(){
					setImage();
					imgs[j].style.left = parseInt(imgs[j].style.left) - translate + 'px';
				}
			})(i);
		}
	</script>
```

+ 认识DOM
- DOM的文档类型
> html:显示数据
> 
> xml:描述数据
```xml
<?xml version="1.0 encoding='utf-8'?>
```
- DOM的节点类型
> Element(元素节点) Attr(属性节点) Text(文本节点) Comment(注释节点) Document(文档节点) DocumentType(文档类型节点) documentFragment(文档片段节点)

- 返回值

```html
	<!-- nodename，nodevalue实验 -->
	<div id="container">这是一个元素节点</div>
	<script>
	var divNode = document.getElementById('container');
	// 元素节点
	console.log(divNode.nodeName + '/' + divNode.nodeValue) // div/null
	// 属性节点
	var attrNode = divNode.attribute[0];
	console.log(attrNode.nodeName,attrNode.nodeValue) // id,container
	// 文本节点,childNodes 获得子元素
	var textNode = divNode.childNodes[0];
	console.log(textNode.nodeName,textNode.nodeValue) // #text,这是一个元素节点
	// 注释节点
	var commentNode = document.body.childNodes[1];
	console.log(commentNode.nodeName,commentNode.nodeValue) // #comment,nodename，nodevalue实验 

	// 文档类型节点
	console.log(document.doctype.nodeName,document.doctype.nodeName)


	</script>
```

### domReady
浏览器内部工作原理[http://kb.cnblogs.com/page/129756/]
> dom树渲染完成，成为domReady

+ 浏览器渲染引擎的基本渲染流程（html结构的渲染过程）
> 1.解析HTML构建DOM树(构成DOM节点)
>
> 2.构建渲染树(解析样式信息)
>
> 3.布局渲染树（布局DOM节点）
>
> 4.绘制渲染树（绘制DOM节点）

+ domContentLoaded
> 在页面的dom树创建完成后(HTML解析第一步完成)即出发，而无需等待其他资源加载
> 
> ie不支持，要做兼容，document.documentElement.doScoll('left')来判断dom树是否创建完毕---hack兼容

```html
<script>
	function myReady(fn){
	if (document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);
	} else {
		IEContentLoaded(fn);
	}
	// IE模拟DOMcontentLoaded
	function IEContentLoaded (fn){
		var d = window.document;
		var done = false;
		// 只执行一次的用户的回调函数init()
		var init = function(){
			if(!done){
				done = true; // 确保init只执行一次
				fn();
			}
		}

		(function(){
			try {
			d.documentElement.doScroll('left'); // 调用doScroll方法，里面的数值随便传
		} catch (e){
			setTimeout(argument.callee,50);
			init();
		}})();

		// 监听document的加载状态
		d.onreadystatechange = function(){
			// 如果用户在domready之后绑定的函数，就立马执行
			if (d.readyState =='complete') {
				d.onreadystatechange = null; // 清清除事件
				init();
			}
		}
	}
}
</script>
```

### 如何判断元素的节点类型
+ 四种方法
	- isELement
	- isHTML
	- IsXML
	- contains
+ 判断是否是元素节点

```html
	<div id="test">aaa</div><!-- 这是一个注释节点 -->
	<script>
		var isElement = function(el){
			return !!el && el.nodeType === 1;
		}
		var test = document.getElementById('test');
		console.log(isElement(test))
		console.log(isElement(test.nextSibling));
	</script>
	
```


+ HTML DOM的方法
- getElementById() 返回id的元素
- getElementsByTagName() 返回包含标签的节点列表
- getElementByClassName() 返回指定类名的节点列表,ie9以下不支持
- appendChild() 添加子节点
- removedChild() 删除子节点
- replaceChild() 替换子节点
- insertChild() 在指定的子节点前插入新的子节点
- createAttribute() 创建属性节点
- createElement() 创建元素节点
- createTextNode() 创建文本节点
- getAttribute() 返回指定的属性值
- setAttribute() 修改属性值

+ HTML DOM的属性
> 属性是(HTML元素)节点的值

```html
	<p id='info'>helloword</p>
	<script>
		var info = document.getElementById('info').innerHTML;
		document.write(info);

	</script>
```

+ nodeName 
> nodeName 是只读属性，nodeName的属性规定节点的名称
	- 元素节点 的nodeName 是标签名称
	- 属性节点 的nodeName 是属性名称
	- 文本节点 的nodeName 是#text
	- 文档节点 的nodeName 是#document

+ nodeValue
> 规定节点的值
	- 元素节点的 nodeValue 是 undefined 或 null
	- 文本节点的 nodeValue 是 文本本身
	- 属性节点的 nodeValue 是 属性值

+ nodeType属性
> nodeType属性返回的节点的类型，nodeType是只读的
	- 元素 1
	- 属性 2
	- 文本 3
	- 注释 8
	- 文档 9

+ childNodes 获得某个元素下所有子元素，包括元素节点，属性节点，注释节点，文本节点等
+ children 获得某个元素的所有的元素子节点

```html
	 <div id="box">
	 	<ul>
	 		<li class="items">1</li>
	 		<li class="items">2</li>
	 		<li class="items">3</li>
	 	</ul>
	 </div>
	 <script>
	 // childNodes 是个伪数组,获得的都是直接子元素
	 	var box = document.getElementById('box');
	 	box.childNodes;
	 </script>
```

+ parenrNode ,firstElementNode, lastElementNode,nextElementNode,preElementNode;
> 父节点，第一个子节点，最后一个子节点，下一个子节点，上一个子节点

+ offsetParent
> 元素的直接定位父级，如果父级没有定位，那么获得到的就是body
+ offsetLeft/offsetTop
> 元素获得到直接定位父级的左侧距离/上侧距离
> 
> 子元素的内外边框到父元素的内边框的距离
+ getBoundingClientRect(); 获取对象的值，width，height，left，right，top，bottom

+ getAttribute/setAttribute/removeAttribute 对行间样式进行获取／设置／移除操作

+ clientWidth/offsetWidth/document.documentElement.clientWidth
> clientWidth = contentWidth + paddingWidth 
> offsetWidth = contentWidth + paddingWidth + borderWidth

+ 获取文档值

```html
	<p id='info'>hello world</p>
	<script>
	var txt = document.getElementById('info');
	document.write(txt.firstChild.nodeValue); // hello world
	</script>
```

### HTMLDOM 修改
+ 修改HTML元素
	- 改变HTML的内容
	- 改变css的样式
	- 改变HTML的属性
	- 创建新的HTML元素
	- 删除已有的HTML的元素
	- 改变事件（处理程序）
+ 创建HTML的内容
> document.getElementById().innerHTML

+ 改变css的样式
> ocument.getElementById().style.color

+ 创建新的HTML的元素
> 创建元素节点，然后把它追加到已有的元素上

```html
	<div id="div1">
		<p id="p1">para1</p>
		<p id="p2">para2</p>
	</div>
	<script>
		var para = document.createElement('p');
		var node = document.createTextNode('this is a para');
		para.appendChild(node);
		var element = document.getElementById('div1');
		element.appendChild(para);

	</script>
```

+ 删除元素
> removeChild(),从父元素删除元素

```html
	<div id="div1">
		<p id="p1">para1</p>
		<p id="p2">para2</p>
	</div>
	<script>
		var element = document.getElementById('div1');
		var p1 = document.getElementById('p1');
		element.removeChild(p1);
	</script>
```

+ HTML DOM 事件
	- html事件的例子
	> 当用户点击鼠标时
	> 
	> 当页面加载时
	> 
	> 当图片加载时
	> 
	> 当鼠标拖动到元素上时
	> 
	> 当输入字段被改变时
	> 
	> 当HTML表单被提交时
	> 
	> 当用户触发按键时

- 案例

```html
	// 简单的点击
	<h1 onclick='this.innerHTML="123"'>1</h1>
	<h1 onclick='changetext(this)'>123</h1>
	<script>
	function changetext(id){
		id.innerHTML = '456'
	}
	</script>
	// 使用HTML 
	<button id='mybtn'>点击</button>
	<p id="demo"></p>
	<script>
		document.getElementById('mybtn').onclick = function(){
			displayDate();
		};
		var displayDate = function(){
			document.getElementById('demo').innerHTML = Date();
		}
	</script>
	// onchange事件,输入字段的验证
	<input type="text" id="text" onchange='f1()'>
	<script>
		function f1(){
			var x = document.getElementById('text')
			x.value = x.value.toUpperCase();
		}
	</script>

```





