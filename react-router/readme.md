## React router 入门
教程地址[http://www.ruanyifeng.com/blog/2016/05/react_router.html]

### Lesson1
+ 目录结构
	> modules
	>> App.js
	> node_modules
	>
	> index.html
	>
	> index.js
	>
	> package.json
	>
	> webpack.config.js
	>

+ 原理
	- webpack.config.js 中设置了打包的entery和output
	- index.js 文件中，引入了react，react-dom，./modules/App.js
	```js
		// 导入react／react-dom／app.js
		import React from 'react'
		import { render } from 'react-dom'
		import App from './modules/App.js'
		// 使用ReactDOM.render 的方法
		render(<App />, document.getElementById('app'))
	```
	- index.html 文件中设置了react生成的html插入的盒子
	```html
		<!doctype html public "storage">
		<html>
		<meta charset=utf-8/>
		<title>My First React Router App</title>
		<div id=app></div>
		<script src="bundle.js"></script>
	```
	- App.js文件中，定义了一个组件
	```js
		import React from 'react'

		export default React.createClass({
			render(){
				return <div>hello react-dom</div>
			}
		})

	```
