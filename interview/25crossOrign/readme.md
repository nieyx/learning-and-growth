### 跨域

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
