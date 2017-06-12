var htmlWebpackPlugin = require('html-webpack-plugin'); // 对插件的引用
module.exports = {
	// entry: ['./src/script/main.js', './src/script/a.js'], // 打包输入
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
	},
	output: {
		path: __dirname + '/dist', // 输出的路径不可以时相对，要写成诗绝对的
		// filename: 'js/bundle.js', // 多个输入，但是只有一个输出文件，有些不合理
		// filename: 'js/[name].js', // 多个输出时，会有不同的文件名输出，用各自的name
		filename: 'js/[name]-[hash].js', // 多个输出时，会有不同的文件名输出，用各自的name+hash
		// filename: 'js/[name]-[chunkhash].js' //多个输出时，会有不同的文件名输出，用各自的name+chunkhash
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html' // 根目录下的模板文件
		}) // 进行初始化
	]
}