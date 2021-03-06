### 设计模式 Design Patterns
文档地址[http://web.jobbole.com/85136/]
1. 单例模式
> 只调用一次，通常用来控制添加创建一次的标签

2.查看如下代码
```js
	var obj = {
		attr1: 1,
		attr2: 2,
		method1: function(){
			return this.attr1;
		},
		method2: function(){
			return this.attr2;
		}
	}

	// 上诉代码，是对象字面量的结构，上面的所有属性和方法都要通过obj来访问，但它并不是单例模式，单例模式只能被调用／实例化一次
	<!-- 下面的代码，是单例模式-->
	function Single(name){
		this.name = name;
	}
	Single.prototype.getName = function(){
		return this.name
	}

	var getInstance = (function () {
		var instance = null;
		return function(name){
			if (!instance) {
				instance = new Single(name);
			}
			return instance;
		}
	})();
	
	var aa = getInstance('aa');
	var bb = getInstance('bb');
	console.log(aa === bb)
	aa.getName(); // aa
	bb.getName(); // aa
	

	// 单例模式的应用，创建一个div
	var createDiv = function(){
		var div = document.createElement('div');
		div.innerHTMl = '我是一个div';
		document.body.appendChild(div)
		return div;
	}

	var getInstance = (function(){
		var instance;
		return function(){
			return instance || (instance = fn.call(this, argument));
		}
	})();

	btn.onclick = function(){
		getInstance(createDiv);
	}

```


2. 工厂模式
> 大量生产相似的东西，有相同的效果
```js
	function CreatePerson(name, age){
		this.name = name;
		this.age = age;
	}
	CreatePerson.prototype.showMessage = function(){
		return this.name + this.age
	}
	var p1 = new CreatePerson('zhangsan',18)
	console.log(p1.showMessage());
	var p2 = new CreatePerson('lisi',18)
	console.log(p2.showMessage());
```

3. 模块模式
> 为对象字面量添加私有变量和私有属性

```js
	// 普通的对象字面量
	var module = {
		attr: 1,
		method: function(){

		}
	}
	
	// 设置私有变量,一个自执行函数，返回的是一个对象，函数内部的
	var module = (function(){
		var privateNum = 1;
		function privateFn(){
			// somecode
		}
		return {
			publicNum: privateNum,
			publicFn: privateFn
		}
	})();

	<!-- 使用模块模式的场景：创建一个对象，并用某些数据进行初始化，同时还要公开一下访问这些私有变量的方法 -->
	function CustomType(){
		this.name = 'zhangsan'
	}
	CustomType.prototype.getName = function(){
		return this.name
	}

	var application = (function(){
		// 私有
		var privateA = 'a';
		// 私有函数
		var A = function(){}

		// 实例化一个对象后，返回这个实例，然后为这个实例增加一些公有的属性和方法
		var object = new CustomType();

		object.A = 'aa';
		object.B = function(){
			return privateA;
		};
		
		return object;
	})();

	console.log(application)
```

4. 代理模式
> 对象代替本体被实例化

```js
	// 图片预加载，没有使用代理的情况
	var ImageLoad = (function(){
		var imgNode = document.createElement('img');
		document.body.appendChild(imgNode);
		var img = new Image();
		img.onload = function(){
			imgNode.src = this.src;
		}
		return {
			setSrc: function(src){
				imgNode.src = "http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif";
	            img.src = src;
			}
		}
	})();
	// 调用方式
	ImageLoad.setSrc('https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png')

	// 使用代理的情况，每个函数处理的分工明确
	var imageLoad = (function(){
		var img = document.createElement('img');
		document.body.appendChild(img);
		return {
			setSrc : function(src){
				img.src = src;
			}
		}
	})();

	var proxyImgae = (function(){
		var image = new Image();
		image.onload = function(){
			imageLoad.setSrc(this.src);
		}

		return {
			setSrc: function(src){
				imageLoad.setSrc('http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif');
				image.src = src;
			}
		}
	})();

	proxyImage.setSrc('http://pic16.photophoto.cn/20100812/0035035714840447_b.jpg')
```























