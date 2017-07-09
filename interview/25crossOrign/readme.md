### 跨域
文档链接1[http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html][http://www.ruanyifeng.com/blog/2016/04/cors.html]
### 为什么要跨域及什么是同源策略
+ 浏览器的安全基石**同源策略**
+ A网站的cookie，B网站不能打开，除非这两个网页同源
+ 同源是说三个相同
	- 协议
	- 域名
	- 端口

+ 同愿政策的目的
	- 保护用户的信息安全，防止恶意的网站窃取数据

+ 同源政策的限制
	- cookie无法获取，localStorage和IndexDB无法获取
	- DOM无法获得
	- AJAX请求不能发送

### cookie

+ 什么是cookie
	- 是服务器写入浏览器的一小段信息，只有同源的网页才能获取
+ 如果两个网页的一级域名相同，二级域名不同，浏览器允许设置document.domain来共享cookie

```js
	A: http://w1.example.cpm/a.html
	B: http://w2.example.cpm/b.html
	// 两个页面设置相同的document.domain来共享cookie
	document.domain = 'example.com';
	// 在A页面通过脚本设置一个cookie
	document.cookie = 'test1=hello';
	// B页面可以访问
	var allCookie = document.cookie;
```

+ 注：document.domain方法只适用于cookie和iframe方法，localStorage和IndexDB不使用，

+ 服务器在设置cookie的时候，指定cookie的所属域名为一级域名，这样二级三级就不用坐任何的设置了
```js
	set-cookie= key=value;domain=.example.com; path=/
```

### iframe
> 如果两个页面不同源，就无法访问对方的DOM，典型的例子，iframe窗口和window.open方法打开的窗口，它们无法与父窗口进行通讯

```html
	<div class="container">
		<iframe src="http://www.baidu.com" frameborder="0" id="myIframe"></iframe>
	</div>
	<script>
		// 如父窗口运行以下命令，iframe窗口不是同源，就会报错
		document.getElementById('myIframe').contentWindow.document
	</script>
```

+ 解决跨域窗口通讯的办法
	- 片段标识符 fragment
	- window.name
	- 跨文档通讯的api 

### 片段标识符
> 片段标识符指的是url的#后的部分，改变#后面的部分，页面不会刷新

```js
	// 父窗口可以把信息写入子窗口的片段标识符
	var src = originURl + '#' + data;
	document.getElementById('myIframe').src = src;
	// 子窗口通过监听haschange事件得到通知
	window.onhaschange = checkMessage;
	function checkMessage() {
		var message = window.location.hsah;
	}
```

### window.name 
> 无论是否同源，只要在同一个窗口里，前一个页面设置了这个属性，后一个网页就可以读取她
```js
	// 父窗口先打开一个子窗口，再让载入一个不同源的网页，该网页信息写入window.name属性
	window.name = data;
	// 子窗口跳回一个与主窗口同域的网址
	location = 'jttp://parent.url.com/xxx.html'
	// 主窗口就可以读取子窗口的window的name
	var data = document.getElementById('myIframe').contentwindow.name
```
+ 优点，存储数据大，但是影响性能，因为总是在监听子窗口的window.name的变化


### window.postmessage
> H5引入的全新的API，跨文档通讯的API

```js
	// a向b发送消息
	var popup = window.open('http://bbb.com','title');
	popup.postMessage('hello world', 'http://bbb.com');
	// postmessage的第一个参数是具体的消息内容，第二个参数是接受消息的窗口源orign
	// orign可以设置成*，表示向所有的窗口传递
	// 子向父发送消息
	window.opener.postMessage('nice to meet you', 'http://aaa.com');

	// 父窗口和子窗口都可以通过监听message事件，来获得对方的消息
	window.addEventListerner('message', function(e){
		console.log(e.data)	
	},false)

	// message 事件的事件对象enevt，提供以下三个属性
	// event.source 发送消息的窗口
	// event.origin 消息发向的网址
	// event.data 消息的内容

	// 例：子擦黄口通过event.source属性医用父窗口，然后发送消息
	window.addEventListener('message', receivemessage);
	function receivemessage(event){
		event.source.postMessage('nice to meet you', '*')
	}

	// event.origin 属性可以过滤不是发给本窗口的消息
	window.addEventListener('message', receivemessge);
	function receivemessage(event){
		if (event.origin !== 'http://aaa.com') return 
		if (event.data = 'hello world') {
			event.source.postmessage('hello', "*");
		} else {
			console.log(event.data);
		}
	}
```

### localStorage
> window.postMessage，可以读取其他窗口的localStorage

```js
	// 父窗口，父窗口发送的消息
	var win = document.getElementstByTagName('iframe')[0].contentwindow;
	var obj = {name:'jack'};
	win.postMessage(JSON.stringfy({key:'storage',data:obj}),'http://bbb.html')

	

	// 子窗口，接受消息,并写入自己的localStorage
	window.onmessage = function(e){
		if (e.origin !== 'http://bbb.com'){
			return 
		}
		var payload = JSON.parse(e.data);
		localStorage.setItem(payload.key,JSON.stringfy(payload.data))

	}

	// 加强版的父窗口发送
	var win = document.getElementstByTagName('iframe')[0].contentwindow;
	var obj = {name:'jack'};
	// 存入对象
	win.postMessage(JSON.stringfy(key:'storage',method:'set', data:obj))
	// 读取对象
	win.postMessage(JSON.stringfy(key:'storage',method:'get'),"*");
	window.onmessage = function(e){
		if (e.origin !== 'http://aaa.com') {
			return 
		}
		console.log(JSON.parse(e.data).name)
	}

	// 加强版的子窗口接受

```

### AJAX
> 同源政策规定，ajax请求只能发给同源的网址，否则就报错
>
> 除了架设服务器代理（浏览器请求同源服务器，再有服务器请求外部的资源）

+ 在浏览器，可以有三种方法来进行跨域
	- jsonp
	- websocket
	- cros

#### jsonp
> 在页面添加一个script标签，向如武器请求json数据，服务器受到请求后，将数据放在一个置顶名字的回调函数中传回来

```js
	function addScriptTag(src){
		var script = docuemnt.createElement('script');
		script.setAttribute('type','text/javascript');
		script.src = src;
		document.body.appendChild(script);
	}
	window.onload = function(){
		addScriptTag('http://example.com/ip?callback=foo');

		function foo(data) {
			console.log('your publice IP address is:' + data.ip)
		}
	}

	// 服务端传递的数据
	foo({
		'ip':'1,2,3,4'
	})
```

#### websocket
> websocket有一个origin的字段，服务器接受字段之后，会判断该域名是否在白名单中，然后进行通讯


#### CROS
> 是w3c的标准，jsonp只允许发送get请求，cros允许各种类型的请求，但是需要浏览器和服务器同时支持
>
> 
>

```js
```



















