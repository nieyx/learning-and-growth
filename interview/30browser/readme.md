## 浏览器的加载解析渲染
文档地址[http://www.jianshu.com/p/e141d1543143]

### why 为什么要了解浏览器的加载，解析，渲染过程
+ 加载：了解浏览器如何**加载**，可以在引用外部文件，js文件的时候，使浏览器以最快的速度将文件加载完毕
+ 解析：了解浏览器如何**解析**，构建DOM结构，组织CSS选择器，选择最优的写法，提高解析的效率
+ 渲染：了解浏览器如何**渲染**，设置元素的属性，编写js文件时，减少重绘，重新布局的消耗
+ 加载，解析，渲染是不完全独立的，有时会**交叉**，一边加载，一边解析，一边渲染

### how 浏览器是如何加载，解析，渲染的呢？
1. 当用户在地址栏中输入了url地址，DNS（域名解析）服务器，对用户输入的地址的**域名**进行解析，根据域名查找对应的ip地址，找到之后会向对应的IP地址的网络服务发送一个**http请求**
> url --- dns解析 --- 对应ip地址的网络服务器发http请求
2. **网络服务器**解析请求，并发送请求给**数据服务器**
3. 数据库服务器将数据资源发送给网络服务器，网络服务器解析资源，生成html文件，把内容放在http response中，并返回给浏览器
4. 浏览器解析http response
5. 浏览器解析http response之后，会下载html文件，并下载html内部所应用的外部文件

### 加载
> 加载的顺序：当浏览器获得到一个html文件的时候，会从上至下的下载，并在加载的过程中进行解析渲染
+ 加载过程中遇到不同的文件，有不同的处理方式
	- css文件 --- 这是异步的请求
	> 遇到css文件，会另外开启一个线程来加载文件（开启另外一个请求，用来请求css文件），遇到图片也是一样的开启另外一个线程
	- js文件
	> 遇到js文件，会挂起渲染（加载解析渲染同步）的线程，要等到js文件加载完成，并且等待解析完成，才可以恢复html文档的渲染线程

+ js文件阻塞页面加载的原因
> js可能会更改dom的结构，如 document.write，这就是说，可能在js执行完成前，后续所有资源的下载是没有必要的，这是js阻塞后续资源下载的根本原因
+ css 文件虽然不会阻塞页面的加载，但是会影响js文件的执行，即使js文件中只有一行代码，也会阻塞
> 可能会有var width = $('#id').width();在js执行前，浏览器必须加载并解析完css文件，这是css阻塞js的基本原因

### 解析
+ html解析--构建dom树，根节点是docuemnt
+ css解析 --- 生成css样式表
+ js解析 --- 在js加载的同时也在解析


### 优化建议
参考页面[https://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html]
1. 将script标签放在页面的底部
2. 减少script的请求量
3. 无阻塞脚本，在页面加载完成后，在加载js代码，window.onload事件触发之后在下载脚本
	+ 使用defer和async的属性
	+ 动态的创建script标签
	+ XHR创建script标签，弊端是必须页面处于同源，不能是存在cdn缓存中


### defer属性
+ 在html4.0中提出的，只在ie和firefox3.5以上才有效果，
+ 在script标签中设置了defer属性之后，表示这个js脚本不会多DOM进行操作
+ 设置defer属性之后，可以放置在页面的任何部分，会加载但是不会执行，直到dom加载完成，既载onload执行之前才会被解析

### async属性
+ 与defer具有相同的功能，可以异步加载js脚本
+ 但是设置了async属性的脚本，是加载后就会执行，在js之间有依赖的话，是会报错的


### 动态加载脚本
+ 动态的加载脚本，在script标签被打到页面上之后，就直接立刻开始下载
+ 此方法的好处是：无论在何处，文件的加载和执行，都不会加载和阻塞页面的处理过程
+ 可以将此方法创建的script放在head中
+ 动态加载的脚本，会在调用的时候直接加载，如何这个脚本中包含其他页面需要调用的接口，那么就会出现问题
+ 这时就需要对脚本做一个监控，查看是否加载完成

```js
	// 封装一个动态创建script的方法
	function loadScript (url, callback) {
		var script = docuemnt.createElement('script');
		script.type = 'text/javascript';

		if (script.readState) {
			script.onreadystats = function () {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			}
		} else {
			script.onload = function () {
				callback()
			}
		}

		script.src = url;
		document.getElementsByTagNamw('head')[0].appendChild(script);
	}
	loadScript('./script.js', function(){
		loadScript('./script1.js', function(){
			alert('all files are loaded')
		})
	}) // 可以保证加载顺序
```


### XHR对象实现异步加载
+ 可以使用xhr的方式下载不理解执行的代码
```js
	var xhr = new XMLHttpRequest();
	xhr.open('get','script1.js')
	xhr.onreadystatechange = function () {
		if (xhr.readState ===4) {
			if ( xhr.status >= 200 && xhr.readyState <= 300 || xhr.readyState === 304) {
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.text = xhr.responseText;
				document.body.appendChild('script');
			}
			
		}
	}
	xhr.send(null);
```


