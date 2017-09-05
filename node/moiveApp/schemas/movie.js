var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	doctor:  String,
	title:  String,
	language:  String,
	country:  String,
	summary:  String,
	flash:  String,
	poster:  String,
	year:Number,
	meta: {
		// 在录入或更新数据的时间的记录
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});
// 每次在存储数据之前，都来调用这个方法
MovieSchema.pre('save', function(next){
	// 判断数据输否是新添加的
	if (this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}
	// 调用next，将流程走下去
	next();
});

// 添加静态方法，只有实例化之后，才会有这个方法
MovieSchema.static = {
	// 用来去除数据库中所有的数据
	fetch: function(cb){
		return this
			.find({})
			.sort('meta.updateAt') // 按照更新时间排序
			.exec(cb);
	},
	// 查询带条数据
	findById: function(id, cb){
		return this
			.findOne({_id: id})
			.exec(cb);
	}
};

// 将模块导出
module.exports = MovieSchema;