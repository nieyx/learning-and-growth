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
















