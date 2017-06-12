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