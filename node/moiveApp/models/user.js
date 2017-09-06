var mongoose = require('mongoose');
// 引入模式的文件
var UserSchema = require('../schemas/user.js');
// 调用模型
var User = mongoose.model('User', UserSchema);

// 将狗早函数到导出
module.exports = User;