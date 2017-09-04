// 模型文件

var mongoose = require('mongoose');
var MoiveSchema = require('../schemas/moive');

// 倒入模型
var Moive = mongoose.model("Moive", MoiveSchema);

module.exports = Moive;
