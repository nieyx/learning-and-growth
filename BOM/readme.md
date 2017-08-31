## BOM

### 什么是BOM
> browser object model 浏览器对象模型，js与浏览器的交互

### window对象
+ 所有的浏览器都支持window对象，表示浏览器的窗口
+ 所有的js全局对象，函数，及变量都是window对象的成员
	- 全局变量 是window对象的属性
	- 全局函数是window的对象的方法
	- document 是window对象的属性之一
	> window.document.getELementById() = document.getELementById()

### window的尺寸
+ ie9以上浏览器
```js
window.innerHeight // 浏览器窗口的内部高度（包括滚动条）
window.innerWidth // 浏览器窗口的内部宽度（包括滚动条）

```
+ ie9以下浏览器
```js
document.documentElement.clientHeight 
document.documentElement.clientWidth 
//
document.body.clientHeight
document.body.clientwidth
```
+ window浏览器的尺寸的兼容写法

```html
	<script>
		var w = window.innerWidth || document.documentElement.clientwidth || document.body.clientWidth;
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	</script>
```
### 页面滚动的距离
```html
	<script>
		var top = document.documentElement.scrollTop || document.body.scrollTop;

		// document.documentElement.scrollTop ie&firefox
		// document.body.scrollTop  chrome
	</script>
```

### 内容高度
document.documentElement.scrollHeight

### 文档高度,算上margin+padding+border
document.documentElement.offsetHeight

### 其他window的方法
+ window.open() 打开新的窗口
+ window.close() 关闭当前窗口
+ window.moveTo() 移动当前窗口

### window.location
> 获取当前页面的url，把浏览器重定向到新的页面

+ window Location 
> 在使用时，可以不加window前缀
- location.hostname 返回web主机的域名
- location.pathname 返回当前页面的路径和文件名
- location.port 返回web的主机端口
- location.protocal 返回web协议，http/https
- location.href 当前页面的url
- window.location.assign() 加载新文档
> window.location.assign('www.w3school.com')

### window.history
> 包含浏览器的历史
+ window.history
	- history.back() 浏览器的后退按钮，加载history列表表中的前一个url
	- history.forward() 浏览器的向前按钮，加载history列表表中的后一个url

### window.navagator
> 访问者浏览器的信息，不应该被应用于检测浏览器的版本

### js弹窗
+ alert()
+ confirm()

```html
	<script>
		function myFunction(){
			var x;
			var r = confirm('按下按钮'); // 确认弹窗上提示信息
			if (r == true){
				x='true';
			} else {
				x='false'
			}
			document.getELementById().innerHTML = x;
		}
	</script>
```
+ prompt()

```html
	<script>
		function myFunction(){
			var x ;
			var y = prompt('请输入',‘123’);
			if(y!=null && y!=''){
				x='hello' + y;
				document.getELementById().innerHTML = x;
			}

		}
	</script>
```

### js的计时事件
+ setInterval/clearInterval
> setInterval(function(){},1000)
+ setTimeout/clearTimeout
> setTimeout(function(){},1000)

### js Cookie
> cookie 存储web页面的用户信息

+ 什么是Cookie
> 存在于电脑上的文本文件
>
> 当web服务器向浏览器发送web页面时，在连接关闭后，服务端不会记录用户的信息
>
> 当浏览器从服务器上请求web时，属于该页面的cookie会被添加到请求中，服务器通过这种方式来回去用和的信息


+ 使用js来创建cookie
> document.cookie 来创建，读取及删除cookie

```js
	// 创建cookie
	document.cookie = "username=John";
```

+ 使用js来读取cookie
> var x = document.cookie;

+ 使用js来修改cookie
> 重新给cookie赋值，旧的值将被覆盖
+ 使用js来删除cookie
```js
	document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/"
```
> 设置expires的过期时间
```js
	// expires的过期时间，删除时不必指定cookie的值
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
	// 过期时间是一个时间级字符串
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + 3); // 设置过期时间为当前时间+3天之后
	document.cookie = “usurname=john; expries = " + oDate.toGMTString();
```
+ cookie字符串
> 使用名值对
+ js cookie的实例
> 设置cookie值的函数，获取cookie值的函数，检测cookie值的函数


+ getCookie，setCookie，removeCookie
1. getCookie 通过key值来获取cookie中存储的数据
```js
	// getCookie
	function getCookie(key){
		var arr = document.cookie.split('; ');
		for(var i=0; i<arr.length; i++){
			var arrNew = arr[i].split('=');
			if(arrNew[0] == key) {
				return decodeURI(arrNew[1]);
			}
		}
	}
```
2. setCookie 通过key：value来将数据存储到cookie中
```js
	// setCookie
	function setCookie (key, value, t){
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + t);
		document.cookie = key + '=' +  value + '; expries = ' + oDate.toGMTString();
	}
```
3. removeCookie 删除指定的key在cookie中的数据
```js
	// removeCookie
	function delCookie(key){
		setCookie(key, '',-1) // 设置expries的值为-1
	}

```

### 鼠标的滚轮事件
文档地址[http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/]


### event 对象
> ie&chrome  全局下的event对象，在firefox下，是在事件函数中传递的第一个参数
> 
> 做兼容：var e = ev || event ,ev是事件中传递的第一个参数








