var htmlWebpackPlugin = require('html-webpack-plugin'); // 对插件的引用
module.exports = {
	// entry: ['./src/script/main.js', './src/script/a.js'], // 打包输入
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js',
	},
	output: {
		path: __dirname + '/dist', // 输出的路径不可以时相对，要写成诗绝对的
		// filename: 'js/bundle.js', // 多个输入，但是只有一个输出文件，有些不合理 // filename: 'js/[name].js', // 多个输出时，会有不同的文件名输出，用各自的name
		filename: 'js/[name]-[hash].js', // 多个输出时，会有不同的文件名输出，用各自的name+hash
		// filename: 'js/[name]-[chunkhash].js' //多个输出时，会有不同的文件名输出，用各自的name+chunkhash
		publicPath: 'http://cdn.com', // 上线后的相对路径的地址
	},
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
}