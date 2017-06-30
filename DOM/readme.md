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











