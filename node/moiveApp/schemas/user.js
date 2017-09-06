var mongoose = require('mongoose');
// 用于生成随机的盐，通过加盐和hash来保存用户的密码
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
// 创建用户登录的数据
var UserSchema = new mongoose.Schema({
	// 描述用户的文档结构和数据类型
	user: {
		unique: true,
		type: String
	},
	// 密码是不可逆的一种算法，用加盐的密码hash后的值来保存，hash值是不可逆的，但是只要改变一个字节，hash值也会改变
	// 类似于md5的加密方式
	password: String, 
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
UserSchema.pre('save', function(next){
	var user = this;
	// 判断数据输否是新添加的
	if (this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}

	// 加盐,第一个参数是计算长度，越长越不好被攻击
	bcrypt.genSalt(SALT_WORK_FACTOR,function(err, salt){
		if(err) return next(err);
		// 三个参数，第一个是用户的明文密码
		bcrypt.hash(user.password, salt, function(err, hash){
			if(err) return next(err);
			user.password = hash;
			next();
		});
	});
	// 调用next，将流程走下去
	next();
});

// 添加静态方法，只有实例化之后，才会有这个方法
UserSchema.statics = {
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
module.exports = UserSchema;