## DOM
+ 什么是DOM
> document object model
> 一个页面，由html css js构成
>
> html 结构
>
> css 样式
>
> js 行为
>
> 通过js来控制页面，浏览器，操作bom，dom
>

+ 主要内容
- 滑动门特效
- 认识dom
- 文档与节点类型
- domready
- 元素节点类型的判断
- 元素节点继承的层次
- 元素节点的分类

+ 滑动门案例
```js
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

```

+ 认识DOM
- DOM的文档类型
> html:显示数据
> 
> xml:描述数据
```js
<?xml version="1.0 encoding='utf-8'?>
```
- DOM的节点类型
> Element(元素节点) Attr(属性节点) Text(文本节点) Comment(注释节点) Document(文档节点) DocumentType(文档类型节点) documentFragment(文档片段节点)

- 返回值

```html
	<!-- nodename，nodevalue实验 -->
	<div id="container">这是一个元素节点</div>
	<script>
	var divNode = document.getElementBy('container');
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

```js
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







