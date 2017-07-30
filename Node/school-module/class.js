var teacher = require('./teacher.js')
var student = require('./student.js')

function add (teacherName, students) {
	teacher.add(teacherName);

	students.forEach(function(item, index) {
		student.add(item);
	})
}

exports.add = add; 
// 如果想让模块称为传统的模块实例，那么用exports

// module.exports = add; 
// 如果想让模块称为特殊的对象类型，那么就要使用module	.exports
// module.exports是真实存在的东西，而exports是module.exports的一个辅助的方法
// 最终返回module.exports给调用者，exports是挂载属性和方法，然后在赋给module.exports
// 如果module.exports对象上有属性，那么久忽略exports上的
// 推荐exports，不会修改module上的