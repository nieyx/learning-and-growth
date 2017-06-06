## 面向对象编程

### 什么是面向对象编程
+ 类和实例是面向对象编程的基本概念
	> 类:  是对象的类型模板
	>> 例如: Student是个学生类，是个学生类型，并不是具体指某一个学生
	> 
	> 实例: 是根据类所创建的对象
	>> 例如: 根据Student类可以创建，xiaoming，xiaohong，xiaogang等多个实例
	>>
	>> 每个实例代表的学生，都指向一个Student的类
	
### js中的面向对象编程
+ 在js中，没有类和实例的概念，
+ 通过prototype来实现的面向对象编程

	```js
	// 案例：原理的展示
		var xiaoming = {
			name: '小明'
		}; // 创建了xiaoming这个对象，只有name属性，没有其他的信息

		var Student = {
			name: 'robot',
			age: 18;
			run: function(){
				console.log(this.name + 'is running');
			}
		}; // student的类可以使用
		
		// 把xiaoming的原型指向了Student，这样小命就继承了Student的属性
		xiaoming.__proto__ = Student; 

		xiaoming.name // '小明',是xiaoming的自有属性
		xiaoming.run() // '小明' is running;

		// 现在想让xiaoming具有能飞的属性
		var Bird = {
			fly: function(){
				console.log(this.name + 'is flying...')
			}
		};
		xiaoming.__proto__ = Bird;
		xiaoming.fly() // '小明' is  flying...;

	// 案例：根据现有的Student来创建xiaohong
		var Student = {
			name:'xiaoming',
			age:18,
			run: function(){
				console.log(this.name + ' is running');
			}
		}

		// 创建小明
		function CreateStudent(name){
			var s = Object.create(Student);
			s.name = name;
			return s;
		}
		var xiaohong = new CreateStudent('小红');
		xiaohong.name; // '小红'
		xiaohong.__proto__ === Student; // true
	```
