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


