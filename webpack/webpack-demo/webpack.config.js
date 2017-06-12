module.exports = {
	entry: './src/script/main.js',
	output: {
		path: __dirname+'/dist/js', // 输出的路径不可以时相对，要写成诗绝对的
		filename: 'bundle.js'
	}
}