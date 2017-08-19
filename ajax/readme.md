## Ajax

1. 什么是ajax
+ 是异步的js和xml数据的交互
+ 并不会整个刷新页面，通过内置的ajax对象，去与后台进行数据交互

2. ajax的使用步骤
```js
	<!-- 相对于打开浏览器 -->
	var xhr = new XMLHttpRequest();
	<!-- 输入url -->
	xhr.open();
	<!-- 发送请求 -->
	xhr.send();
	<!-- 监听数据的返回结果 -->
	xhr.onreadystatechange = function(){
		if (xhr.readystate === 4 ) {
			if(xhr.status === 200) {
				alert(xhr.reponseText)
			} else {
				alert('error: ' + xhr.status)
			}
		}
	}

	<!-- 对于open方法，有三个参数 -->
	open(method, url, boolean) 
	// method
	// url
	// boolean ，默认是false，是阻塞加载，当设置为true的时候，是异步加载
	<!-- readyState和status -->
	// readyState 是ajax的请求状态，当为4的时候说明请求成功，可以接受数据
	// status是http的返回状态码，200代表成功返回内容
	

``` 

## 引用
1. 瀑布流
+ 固定列
+ 动态列


## get和post的区别
1. get
	+ get传递方式的url传递，是对内容的拼接
	+ 传递的是字符串类型
	+ 有传递长度的限制
2. post
	+ 通过请求头发送，不会被缓存
	+ 可以传递其他的数据类型


## http状态码--三位数字
```js
	2**
		请求成功，
	3**
		多种资源的选择
		301 永久重定向
		302 暂时重定向
		304 文件未做修改，

	4**	
		400 客户端请求语法错误，服务器无法理解
		401 要求客户端提供用户名
		403 没有权限
		404 根据客户端的请求，文件资源未找到，
	5** 服务器的错误
		500 服务器内部错误，无法完成请求
		501 服务器不支持请求的功能，无法完成请求
		502 充当网关的服务器，从远端服务器接收到了一个无效的请求
		503 由于超载或者系统维护，服务器暂时无法处理客户端的请求
```

