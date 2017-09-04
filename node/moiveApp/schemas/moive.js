// 模式文件

var mongoose = require('mongoose');

var MoiveSchema = new mongoose.Schema({
	// 放置于电影有关的字段和类型
	doctor: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: Number,
	meta: {
		//  更新内容时间的记录
		createAt: {
			type: Date,
			default:Date.now() // 创建时候的时间
		},
		updateAt: {
			type: Date,
			default:Date.now() // 更新时候的时间
		},
	}
});
// 为模式添加一个方法，每次在存储之前都来调用这个方法，用来判断数据是否是新添加的
MoiveSchema.pre('save', function(next){
	if (this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}
	// 调用next，方法才会继续走下去
	next();
});

MoiveSchema.statics = {
	// fetch 用来取出当前数据库中所有的数据
	fetch: function(cb){
		return this
			.find({})
			.sort('meta.updateAt')
			exec(cb);
	},
	fetch: function(cb){
		// 查找单条数据
		return this
			.findOne({_id: id})
			exec(cb);
	}
};

module.exports = `MoiveSchema`;