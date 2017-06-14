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
			<h1>hello</h1>,
			<h2>tom</h2>

		]
		reactDOM.render(
			<div>{arr}</div>
			document.getELementById('app')
		)
	```
```html
```
```js
```
+ 组件
	> 允许将代码封装成组件，然后插入代码像插入html标签一样，React.creatClass
	>
	> HelloMessage就是一个组件类，在reactDOM中通过<HelloMessage />来调用
	>
	> 插入<HelloMessage />之后就实例出了一个实例
	>
	> 所有组件，都有自己的render方法，用于输出组件的方法
	>
	> 组件内只能有一个顶级标签，否则会报错,组件名称，开头必须大写
	>
	> 组件的属性，可以在this.props对象上获取

	- 案例
	```html
		<div class="app"></div>
	```
	```js
		// HelloMessage就是一个组件类，在reactDOM中通过<HelloMessage />来调用
		// 插入<HelloMessage />之后就实例出了一个实例
		// 所有组件，都有自己的render方法，用于输出组件的方法
		var HelloMessage = React.creatClass({
			render:function(){
				return <h1>hello {this.props.name}</h1>;
			}
		});

		ReactDOM.render(
			<HelloMessage name='john' />
			document.getElementById('app')
		)
	```


+ this.props.children
	- this.props 组件的属性
	- 代表所有组件的字节点
	- react提供一个*React.Children*方法，来处理this.props.children的属性
	```js
		var NodeList = React.createClass({
			render: function(){
				return (
					<ol>
						{
							React.Children.map(this.props.children,function(child){
								return <li>{child}</li>
							})
						}
					</ol>
				)
			}
		})

		ReactDOM.render(
			<NodeList>
				<span>hello</span>
				<span>world</span>
			</NodeList>,
			document.getElementById('app')
		)
	```

+ PropTypes 
	- 验证组件的属性的是否正确
	```js
		var MyTitle = React.createClass({
			propTypes :function(){
				title: React.PropTypes.string.isRequired
			},
			render: function(){
				return <h1>{this.props.title}</h1>
			}
		})

		var data = 123;
		ReactDOM.render(
			<MyTitle  title={data} />,
			document.getElementById('app')
		)
		// 运行之后报错，应该输入的data类型为string
		//  Failed propType: Invalid prop `title` of type `number` supplied to `MyTitle`, expected `string`.
	```
	- 设置组件默认的属性值getDefaultProps
	```js
		var MyTitle = React.createClass({
			getDefaultProps: function(){
				return {
					title: 'my title'
				}
			},
			render:function(){
				return <h1>{this.props.title}</h1>
			}
		})

		ReactDOM.render(
			<Mytitle />,
			document.getElementById('app')
		)
	```

+ 获取真实的DOM节点


























