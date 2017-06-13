## webpack入门与实战

### 安装
```js
	// 1.创建并进入文件夹
	mkdir webpack-demo && cd webpack-demo
	// 2.初始化文件库
	npm init -y
	// 3.安装webpack,--sace-dev 是为了将包的信息自动添加到package.json文件中
	npm install webpack --save-dev
```

### 文件编译
> 创建一个js文件，并进行编译
	```js
		// hello.js
		function hello(str){
			alert(str);
		}

		// 将文件进行编译
		webpack hello.js hello.bundle.js
	```

> webpack本身只可以处理js文件，如若处理其他的文件，可以使用loader模块
>> 首先在相关的文件夹下，安装css-loader和style-loader
>> css-loader 来负责转换css文件，style-loader负责将css文件显示在页面上

	```js
		require('!style-loader!css-loader'./css.css);

		// 如果文件引入时没有写css-loader和style-loader，css编译会报错
		// 或者可以在编译时，用命令行来添加css/style
		webpack	 hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'

		// 如果要实时监控文件是否被修改，然后进行编译，则使用
		webpack	 hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch

	```

### 项目中webpack的使用 
+ 创建目录，并初始化
	```js
		mkdir webpack-demo && cd webpack-demo
		mkdir src
		mkdir src/script
		mkdir src/style

		npm init -y
	```
	> webpack-demo
	>> src
	>>> script
	>
	>>> style

+ 配置输入输出文件路径
	```js
		// webpack.config.js
		module.exports = {
			entry: './script/js',
			output: {
				path: __dirname + '/dist/js', // 不能是相对路径，要是绝对路径
				filename: 'bundle.js'
			}
		}
	```
+ 运行命令行
	```js
		// 直接运行webpack
		webpack

		// 由于默认的执行的配置文件时webpack.config.js
		// 如果修改了配置的文件名为，webpack.dev.config.js
		// 则可用用命令来修改默认的配置
		webpack --config webpack.dev.config.js
	```

### 通过npm的方式调用
> 在package.json中设置script下的参数，来实现运行的目的
```js
	// 在script中添加如下的webpack的代码，
	"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    + "webpack": "webpack --config webpack.config --progress --display-modules --colors --display-reasons"

    // 在终端输入如下命令行
    npm run webpack
  },
```

### webpack中的entry和output
+ 文档链接地址[http://webpack.github.io/docs/configuration.html#entry]
+ entry
	- 三种输入方式
		```js
			entry:'./script/js', // 方式1
			entry: ['./script/js/main.js','./script/js/a.js'] //方式2
			entry: {
				page1: './script/js',
				page2: ['./script/js/main.js','./script/js/a.js']
			} // 方式3

		```
+ output
	- 文档链接地址[http://webpack.github.io/docs/configuration.html#output-filename]文档链接地址
	- 输出方式
		```js
			output:{
				path: __dirname + '/script/',
				filename: 'js/bundle.js', // 多个输入，但是只有一个输出文件，有些不合理
				filename: 'js/[name].js', // 多个输出时，会有不同的文件名输出，用各自的name
				filename: 'js/[name]+[hash].js', // 多个输出时，会有不同的文件名输出，用各自的name+hash
				filename: 'js/[name]+[chunkhash].js' // 多个输出时，会有不同的文件名输出，用各自的name+chunkhash
			}
			// 修改文件后，hash值才会发生变化
		```


### html-webpack-plugin插件的使用
```js
	// 在index.html中引用的文件名是固定情况时
	<script src='dist/js/bundle.js'></script>
	// 当使用name/hash/chunkhash值命名文件时候，script标签内路径的引用，就要使用html-webpack-plugin插件
```
+ html-webpack-plugin插件的使用文档[https://www.npmjs.com/package/html-webpack-plugin]
+ 官网上如何使用插件的文档[http://webpack.github.io/docs/using-plugins.html]
+ 使用步骤
	- 在项目路径下安装插件 
		> npm install html-webpack-plugin --save-dev
	- 安装后在webpack.config.js 文件中，引用这个插件
		> var htmlWebpackPlugin = require('html-webpack-plugin')
		```js
			// 在文件中，初始化插件
			plugins: [
				new htmlWebpackPlugin() //
			]
			//再次执行npm run webpack之后，会在dist的文件下生成一个index.htmlde文件
		```
+ 引出新的问题
	- 在项目根目录下的index.html与在dist文件下生成的index.html没有任何的关系
	- plugins有个参数，可以解决关联的问题
	```js
		new htmlWebpackPlugin({
			template:'index.html', // 根目录下的模板文件
			filename: 'index-[hash].html', // 制定打包后的html文件的名字
			inject: 'head', // 自定脚本输出到html文件中的位置，是head或是body标签，若果不使用，则设置为false
			title: 'webpack is good!!', // 在webpack.config.js中设置模版变量值，可以在页面中展示
		})
	```
	- 在webpack.config.js中设置了模板变量后，在index.html的文件中，进行模板变量的引用
	```js
		<%= htmlWebpackPlugin.options.title%> // title是模板变量值
	```

	- htmlWebpackPlugin中的参数
		* files
		> chunks
		* options[https://www.npmjs.com/package/html-webpack-plugin]
		> plugin的配置文件，所有插件的参数

	- 让有的js文件在head中，有的在body中
	```js
		// 在index.html文件中，直接引入chunks中main／a的entery路径
		<%= htmlWebpackPlugin.files.chunks.main.entry%>
	```

	- 文件压缩
	```js
		// 压缩过程中，删除注释，删除空格
		new htmlWebpackPlugin({ // 进行初始化
			template: 'index.html', // 根目录下的模板文件
			filename: 'index.html', //可以指定打包后html文件的名字
			inject: false,
			title: 'webpack is good!!',
			minify: {
				removeComments:true, // 删除注释
				collapseWhitespace: true // 删除空格
			}

		}) 
	```

+ 处理**多页面**应用
```js
	plugins: [
		new htmlWebpackPlugin({ // 进行初始化
			filename: 'a.html', // 根目录下的模板文件
			template: 'index.html', //可以指定打包后html文件的名字
			inject: 'body',
			title: 'webpack is good a!!',
			chunks: ['main','a']
			// minify: {
			// 	removeComments:true, // 删除注释
			// 	collapseWhitespace: true // 删除空格
			// }
		}), 
		new htmlWebpackPlugin({ // 进行初始化
			filename: 'b.html', // 根目录下的模板文件
			template: 'index.html', //可以指定打包后html文件的名字
			inject: 'body',
			title: 'webpack is good b!!',
			chunks: ['b']
		}), 
		new htmlWebpackPlugin({ // 进行初始化
			filename: 'c.html', // 根目录下的模板文件
			template: 'index.html', //可以指定打包后html文件的名字
			inject: 'body',
			title: 'webpack is good c!!',
			chunks: ['c']
		}), 
	]
```
+ 处理文件中的资源文件
- loader[webpack.github.com/docs/ysing-loaders.html]

> 安装babel-loader，来处理es6文件
	+ 安装提示步骤[http://babeljs.io/docs/setup/#installation]
	+ 制定babel的三种方式
		- 在配置文件中设置
		```js
			// 方式1，在配置文件中设置
			loaders{
				module: {
					test: /\.js$/,
					loader: 'babel',
					query: {
						preset: ['latest']
					}
				}
			}

			// 方式2，在项目的根目录下，新建一个.babelrc的文件，文件中内容如下
			{
				presets: ['latest']
			}

			// 方式3 在package.json文件中设置
			{
			  "name": "webpack-demo",
			  "version": "1.0.0",
			  "description": "",
			  "main": "index.js",
			 + "babel": {
			 	presets: ['latest']
			 }
			  "scripts": {
			  },
			}
		```
	+ loader的使用
		- 文档地址[]
		```js
			var path = require('path');
			loaders: {
				module:{
					test: '/\.js$/',
					loader: 'babel-loader',
					// 解决打包时间太长的问题，因为node_modules已经加载，就不在处理
					exclude: path.resolve(__dirname,'/node_modules/'),
					// 只处理src下的文件打包，会缩短打包时间
					include: path.resolve(__dirname,'/src/'),
				}
			}
		```

+ 如何使用css-loader和style-loader
+ 当webpack打包css文件时，如果遇到flex的这种css的属性，不同的浏览器会添加不同的前缀
	- 安装postcss-loader来解决
	- 安装步骤
		> npm install postcss-loader --save-dev
	- 包的使用文档[https://www.npmjs.com/package/postcss-loader]
	- github 案例地址[https://github.com/postcss/postcss]
	- 使用
	```js
		// 对于添加浏览器前缀，还要在安装autoprefixer,precss
		npm install autoprefixer --save-dev	
		// webpack.config.js文件中的配置
		...
		module: {
			rules:[
				{
					test: /\.css$/,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
	                            importLoaders: 1, // 在cssloader之后，来处理import的资源
	                        }
						},
						{
							loader: 'postcss-loader',
						},
	
					],
				}
			]
		}

		// 在项目的根目录下，新建一个postcss.config.js
		module.exports = {
			plugins: {
				require('precss'),
				require('autoprefixer')
			}

		}
	```

	- 处理css文件中的@import的文件
		```css
			module: {
			rules:[
				{
					test: /\.css$/,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							
	                            importLoaders: 1, // 在cssloader之后，来处理import的资源
	                        }
						},
						{
							loader: 'postcss-loader',
						},
	
					],
				}
			]
		}
		```

### 处理less／sass文件
	+ 安装包
	> npm i less-loader sass-loader --save-dev 
	>
	> 使用方式与css类似

### 处理项目中的模板文件
	+ webpack处理模板文件的loader[webpack.github.io/docs/list-of-loaders.html#templating]



	





