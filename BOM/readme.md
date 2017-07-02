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

### 其他window的方法
+ window.open() 打开新的窗口
+ window.close() 关闭当前窗口
+ window.moveTo() 移动当前窗口
+ window.resiezeTo() 调整当前窗口的尺寸

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














