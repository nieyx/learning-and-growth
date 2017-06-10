## Ajax
+ 什么是ajax
+ ajax有什么作用
+ XMLHttpRequest
+ 同源策略

### 什么是Ajax
> asyn javascript and XML
> 
> 异步执行网络请求

### ajax有什么作用
> web请求原理
>> 当提交form表单时，点击submit按钮时，浏览器会刷新页面，web请求原理，一个http请求对应一个页面
> ajax原理
>> 发送http亲故，局部刷新页面，浏览器不会刷新页面

### XMLHttpRequest
	```js
		// 兼容ie不支持xml的情况
		function success(text) {
			var text = document.getElementById();
			text.value = text;
		}
		function fail(code) {
			var text = document.getElementById();
			text.value = code;
		}
		var request;
		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		} else {
			request = new ActiveXObject('Microsoft.XMLHTTP');
		}

		request.onreadystatechange = function(){
			if (request.readState === 4) { 
				if (request.status ===2) {
					return success(request.responseText);
				} else {
					return fail(requestStatus);
				}
			}
		};
		request.open('GET','');
		request.send(null);
		
	```
### 同源策略
+ ajax的跨域请求，在域名和端口号不同时，是不被允许的，
+ 在前端的开发，通过JSONP的形式
	- JSONP--->  json with padding
	- JSONP只支持get的请求，
	

