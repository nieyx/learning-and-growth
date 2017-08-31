## websocket

### 什么是websocket
是一种传输协议，传统的http请求，是有客户端发送请求到服务端，但是wbsocket可以由服务端向数据端发送请求

### websocket使用的步骤
```html
	<script>
		// 先实例化一个websocket对象
		var websocket = new WebSocket('ws://echo.websocket.org');
		// 对实例的对象绑定open，close，message，send的方法
		websocket.onopen = function(){
			console.log('connection');
		}

		websocket.onclose = function(){
			console.log('连接断开');
		}

		websocket.onmessage = function(e){
			console.log(e.data)
		}

		websocket.send(msg)
	</script>
```

### 上述步骤使用的是一个echo公用的服务器，在本地可使用nodejs-websocket的包来创建一个本地的服务器
文档地址[https://www.npmjs.com/package/nodejs-websocket]
> 是nodejs提供的一个websocket的模块【1.7.1】

### 聊天室的案例














