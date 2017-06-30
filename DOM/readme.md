## DOM
+ 什么是DOM
> document object module
+ 一个页面，由html css js构成
+ html 结构
+ css 样式
+ js 行为
+ 通过js来控制页面，浏览器，操作bom，dom

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
		imgs[i].onmouseover = function(){
			(function(i){
				setImage();
				imgs[j].style.left = imgWidth - translate * (j-1) + 'px';
			})(i);
		}
	}

```