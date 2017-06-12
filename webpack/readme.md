## webpack入门与实战

### 安装
```js
	// 1.创建并进入文件夹
	mkdir webpack-demo && cd webpack-demo
	// 2.初始化文件库
	npm init -y
	// 3.安装webpack
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
[http://webpack.github.io/docs/configuration.html#entry]
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
[http://webpack.github.io/docs/configuration.html#output-filename]文档链接地址
	- 输出方式
		```js
			output:{
				path: __dirname + '/script/',
				filename: 'js/bundle.js', // 多个输入，但是只有一个输出文件，有些不合理
				filename: 'js/[name].js', // 多个输出时，会有不同的文件名输出，用各自的name
				filename: 'js/[name]+[hash].js', // 多个输出时，会有不同的文件名输出，用各自的name+hash
				filename: 'js/[name]+[chunkhash].js' // 多个输出时，会有不同的文件名输出，用各自的name+chunkhash
			}
		```


### html-webpack-plugin插件的使用
[https://www.npmjs.com/package/html-webpack-plugin]



