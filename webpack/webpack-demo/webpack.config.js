var htmlWebpackPlugin = require('html-webpack-plugin'); // 对插件的引用
var path = require('path');

module.exports = {
	// context: __dirname,
	entry: {
		main: './app.js',
	},
	output: {
		path: __dirname + '/dist', // 输出的路径不可以时相对，要写成诗绝对的
		filename: 'js/[name].bundle.js', // 多个输出时，会有不同的文件名输出，用各自的name+hash
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader', 
				// exclude: __dirname + '/node_modules/', // 不需要在通过babel-loader来处理
				// include: __dirname + './src/' // 只打包src文件夹，提高打包速度
				exclude: path.resolve(__dirname + '/node_modules/'), // 不需要在通过babel-loader来处理
				include: path.resolve(__dirname + './src/') // 只打包src文件夹，提高打包速度
			},
			{
				test: /\.html$/,
				loader: 'html-loader', 
			},
			{
				test: /\.css$/,
				// loader: 'style-loader!css-loader!postcss-loader', // 通过！将两个loader进行串联
				// loaders: [
				// 	'style-loader',
				// 	'css-loader',
				// 	'postcss-loader'
				// ], 
				exclude: path.resolve(__dirname, '/node_modules/'),
				use: [
					{
						loader:'style-loader',
					}
					,{
						loader:'css-loader',
						options: {
                            importLoaders: 1,
                        }
					}
					,{
						loader:'postcss-loader',
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader:'style-loader',
					},
					{
						loader:'css-loader',
					},
					{
						loader:'postcss-loader',
					},
					{
						loader:'less-loader',
					}
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({ // 进行初始化
			filename: 'index-app.html', // 可以指定打包后html文件的名字
			template: 'index.html', //根目录下的模板文件
			inject: 'body',
			title: 'webpack is good a!!',
			// minify: {
			// 	removeComments:true, // 删除注释
			// 	collapseWhitespace: true // 删除空格
			// }
		})
	]
}







