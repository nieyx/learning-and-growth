var mongoose = require('mongoose');
// 引入模式的文件
var MovieSchema = require('../schemas/movie.js');
// 调用模型
var Movie = mongoose.model('Movie', MovieSchema);

// 将狗早函数到导出
module.exports = Movie;