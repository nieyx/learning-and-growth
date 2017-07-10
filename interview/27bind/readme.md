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












