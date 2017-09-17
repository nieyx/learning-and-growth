 ## js中bind的使用
文档地址[http://liuwanlin.info/javascriptzhong-bindfang-fa-de-shi-xian/]
 ### 案例引入分析
 ```js
 	var alertText = document.write;
 	alertText('hello');

 	// 在上诉例子中，主要问题是this的指向，当一个函数被直接调用的时候，this是指向window或者是undefined
 	// 导致提示非法调用的异常
 	// 将上述代码修改为

 	alertText.bind(document)('hello');
 	// 或者
 	alertText.call(document,'hello')
 ```

 ### bind的基本使用
 + 绑定函数
 > bind创建一个函数，无论怎么调用，都有相同的this值

 ```js
 	this.num = 9;
 	var module = {
 		num: 81,
 		getNum:function(){
 			return this.num;
 		}
 	}
 	module.getNum(); // 81

 	var getItem = module.getNum;
 	getItem(); // 9

 	getItem.bind(module); // 81

 ```


 + 参数的传递
 文档地址1[https://msdn.microsoft.com/zh-cn/library/ff841995(v=vs.94).aspx]
 文档地址2[https://github.com/hanzichi/underscore-analysis/issues/18]
 ```js
	var fun = function(v1,v2,v3,v4){
		return document.write(v1 + ',' + v2 + ',' + v3 + ',' + v4);
	}
	var emptyObj = {};
	var foo = fun.bind(emptyObj,12,'a');
	foo('b','c'); // 12,a,b,c

	var fun = function(v1,v2,v3,v4){
		return document.write(v1 + ',' + v2 + ',' + v3 + ',' + v4);
	}
	var foo = fun(12,'a','b','c')();
	foo // 12,a,b,c
 ```


 ### 如何封装一个bind的函数
 文档链接[https://github.com/mqyqingfeng/Blog/issues/12]
```js
<!-- 不传递参数时 -->
	Function.prototype.bind = Function.prototype.bind || function(obj){
		var self = this;
		return function(){
			return self.call(obj);
		}
	}

	<!-- 传递参数时 -->
	Function.protptype.bind = function(context){
		var self = this;
		<!-- 获取bind2函数从第二个参数到最后一个参数 -->
		var args = Array.prototype.slice.call(arguments, 1);

		return function(){
			<!-- 这个时候的argument是指bind返回函数传入参数 -->
			发热bindArgs = Array.prptotype.slice.call(arguments);
			self.apply(context, args.concat(bindArgs))
		}
	}
```

 ### bind和call／apply的差别的是什么
```js
	var xw={
    name: "xiaownag",
    gender: "male",
    age: 24,
    say: function(){
        alert(this.name+" , "+this.gender+" ,今年"+this.age);
    }
	}
	var xh={
	    name: "xiaohong",
	    gender: "female",
	    age: 18
	}
	xw.say(); // xiaowang male 24

	xw.say.call(xh) // xiaohong femail 18
	xw.say.bind(xh) // xiaohong femail 18
	xw.say.bind(xh)(); // xiaohong femail 18
	
```












