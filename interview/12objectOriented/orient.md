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
### 原型链
+ 创建函数
	- 每一个创建的对象，都会有一个原型__proto__，这个原型，指向它的原型对象
		```js
			// 创建一个数组，它的原型指向如下
			var arr = [1,2,3,4];
			arr ----> Array.prototype ----> Object.prototype ----> null

			// 创建一个函数，它的原型指向如下
			function foo(){
				return 0;
			};
			foo ----> Function.prototype ----> Object.prototype ----> null
		```
	- 原型链
	> 1.查找object.xxx的属性，当前的object查找，
	> 
	> 2.当前的object没有xxx的属性，则在obj的原型上查找
	> 
	> 3.obj的原型上也没有，要一直查到Object.prototype对象
	>
	> 4.一直没找到，则返回undefined
+ 构造函数
	- new + 函数 ----> 构造函数
		```js
			// 创建一个构造函数
			function Student(name){
				this.name = name;
				this.hello = function(){
					console.log('hello ',this.name);
				}
			};
			var xiaohong = new Student('小红');
			xiaohong.name; // 小红
			xiaohong.hello(); // hello 小红

			// 当函数直接被调用时，this指向的是window，并且返回undefined
			// 原型：xiaohong	 ----> Student.prototype ----> Object.prototype ----> null
		```

	- constructor属性
		```
			// 从构造函数上继承了constructor属性
			// 对于上述例子 new Student() 从 Student上获得了一个constructor的属性
			xiaoming.constructor === Student.prototype.constructor // true
			Student.prototype.constructor === Student // true

		```
	- 原型对象
	```js
	 	// 根据构造函数，可以创建出许多的对象;
	 	// 如果对象有相同的方法，通过将方法添加到构造函数的原型上，可以节省内存
	 	var Student = function(name){
	 		this.name = name;
	 	}
	 	Student.prototype = {
	 		hello:function(){
	 			console.log(this.name + 'hello 哈')
	 		}
	 	}
	 	var zhangsan = new Student('张三');
	 	zhangsan.hello();

	 	// 对于上述，有如下的原型链
	 	zhangsan.__proto__ === Student.prototype;
	 	zhangsan.constructor === Student;
	 	Student.prototype.constructor === Student;
	 	Student.prototype.__proto__ === Object.prototype;

	```

