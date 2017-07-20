## 面向对象编程
文档地址[http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000]
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

### 基本数据类型的包装对象
+ 基本数据类型：string ，number，boolean
+ 对象是复杂数据类型obj，obj可以有自己的属性和方法
+ 那么，问题来了，如下的字符串，为什么可以调用str.indexof方法
```js
	var str = 'hello world!';
	str.charAt();
	str.indexof('e');

	// str是基本数据类型，在调用方法的时候创建一个包装对象，在调用完之后包装对象消失
	var str = 'hello world!';
	str.charAt(); // 创建一个包装对象，包装对象中有charAt的方法

	String.prototype.charAt = function(){
		// some code here
	}
	

	// 思考如下代码会输出什么
	var str = '123';
	str.number = 10; // 创建了一个包装对象，给对象添加了number的属性，创建之后，包装对象消失
	console.log(str.number) // undefined ，再次创建包装对象

	var str = '123';
	String.prototype.number = function(){
		console.log(10);
	}
	console.log(str.number()) // 在包装对象上添加了方法，调用的是包装对象的方法
```

### 面向对象的一些属性和方法
+ hasOwnProperty()  : 看是不是对象自身下面的属性
+ constructor :  查看对象的构造函数，每个原型都会自动添加constructor属性，
> 构造函数或被默认的添加上constructor，如
```js
	var Aaa  = function () {
		this.name = '123';
	}
	Aaa.prototype.constructor = Aaa;
	console.log(Aaa.prototype.constructor === Aaa) // true

	// Aaa.prototype.constructor === Aaa 是在构建函数被创建之后就生成的，最好不要修改
	// 但有时候会不经意的修改，如下
	Aaa.prototype = {
		num: 10,
		prop: 20	}
	console.log(Aaa.prototype) // Aaa
	console.log(Aaa.prototype.constructor === Aaa) // flase
	console.log(Aaa.prototype.constructor) // object

	// 原因，在Aaa.prototype = {}时被prototype的值被一个json对象给赋值，修复方式如下
	Aaa.prototype = {
		constructor: Aaa,
		num: 10,
		prop: 20
	}
	console.log(Aaa.prototype) // Aaa
	console.log(Aaa.prototype.constructor === Aaa) // true
	console.log(Aaa.prototype.constructor) // Aaa
``` 

+ For in 的时候有些属性是找不到的系统自带的属性
避免修改construtor属性
+ instanceof :  运算符对象与构造函数在原型链上是否有关系，可用来判断数据类型
+ toString() :  object上的方法，可用来判断数据类型

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

+ 原型继承
	- 简单的继承,方法继承，拷贝继承
	```js
		// for in 可以用来循环属性
		var a = {
			name: 'xiaohong';
		};
		var b = a;
		b.name = 'xiaoming';
		console.log(b.name) // xiaoming
		console.log(a.name) // xiaoming, a的属性被更改，因为复杂数据类型的存储在堆中，对象赋值，指针指向同一个地方，一个改变，内容就改变

		// 正确的修改方式
		var a = {
			name: 'xiaoming'
		}
		var b = {}
		for (var attr in a) {
			b[attr] = a[attr]
		}
		b.name = 'xiaohong'
		console.log(b.name) // xiaohong
		console.log(a.name) // xiaoming

		// 对上述code进行代码封装
		function extend(obj1, obj2) {
			for (var attr in obj1) {
				obj2[attr] = obj1[attr]
			}
		}
		extend(a, b)
	```
	- 原型继承
```js
	// 创建一个人的类
	function CreatePerson (name, sex) {
		this.name = name;
		this.sex = sex;
	}
	CreatePerson.prototype.showname = function () {
		return console.log(this.name)
	}
	
	// 创建一个明星的类
	function CreateStar (name, sex, address) {
		// this.name = name;
		// this.sex = sex;
		CreatePerson.call(this, name, sex) // 可以调用父类的属性，但是没有父类原型上的方法

		this.address = address;
	}
	CreateStar.prototype.showSex = function () {
		return console.log(this.name + '  ' + this.sex);
	}

	// 上面的代码中，CreatePerson与CreateStar中都有this.name this.sex,可以让明星类去引用人类的方法
	// 修改如下
	// function CreateStar (name, sex, address) {
	// 	CreatePerson.call(this, name, sex) // 可以调用父类的属性，但是没有父类原型上的方法
	// 	this.address = address;
	// }
	
	// 实现原型继承
	// 可直接想到的方法
	CreateStar.prototype = CreatePerson.prototype // 复杂数据类型的存储，是存储在堆中的，将一个对象赋值给另一个，他俩的指针指向了同一个原型对象的地址，那么修改子类的时候，父类也被修改，这是不想看到的结果，所以不能这样使用

	// 可通过一个中间的空对象来转换
	var F = function () {};
	F.prototype = CreatePerson.prototype;
	CreateStar.prototype = new F();
	CreateStar.prototype.constructor = CreateStar;

	var p1 = new CreateStar('xiaoming','man','beijing');
	p1.showname();
	p1.showSex();

```
+ class继承
	> ES6中class继承
	```
		// 构造函数
		var  Student = function(name){
			this.name = name || 'xiaoming';
		}
		Student.prototype = {
			hello:function(){
				console.log('hello ', this.name)
			}
		}
		var xiaohong = new Student();
		xiaohong.hello();

		// 使用ES6的class类
		class Teacher {
			constructor (name) {
				this.name = name;
			}

			speaking(){
				console.log(this.name, 'is speaking!')
			}
		}
		var zhangsan = new Teacher('张三');
		zhangsan.speaking();

		//  ES6中的class继承
		class primaryTeacher extends Teacher {
			constructor(name, grade){
				super(name);
				this.grade = grade;
			}

			hello(){
				console.log(this.name,this.grade,'hello')
			}
		}
		var lisi = new primaryTeacher('lisi');
		lisi.hello();
		lisi.speaking();
		lisi.grade;
		lisi.name;
	```

