### react入门

react入门教程[http://www.ruanyifeng.com/blog/2015/03/react.html]

### 引入文件
+ react.js // react核心库
+ reactdom.js // 处理dom相关的文件
+ browser.js //将JSX语法转化成为javascript语法，耗时，实际应用应放到服务端
	> JSX语法：html和javascript的混合

### 入门语法
+ reactDOM.render()
	- 将模板转化为HTML的语言，并且插入dom
	```html
		<div class="app"></div>
	```
	```jsx
		reactDOM.render(
			<h1>hello react!!</h1>
			document.getELementById('app');
		)
	```

+ JSX语法
	- html与js混合书写，
	```html
		<div class='main'></div>
	```
	```js
		var names = ['tom','lisa','bart']
		reactDOM.render(
			{
			names.map(function(name){
				return <div>hello {name}</div>
			})
			}
			document.getELementById('app')
		)
	```
	- 如果是数组，则直接取数组中的内容
	```html
		<div class='main'></div>
	```
	```js
		var arr = [
			<div>hello</div>,
			<div>tom</div>

		]
		reactDOM.render(
			<div>arr</div>
			document.getELementById('app')
		)
	```






