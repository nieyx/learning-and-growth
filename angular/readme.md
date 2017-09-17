### angualr的知识点
参考地址[http://www.jackpu.com/shi-ge-jing-chang-yu-jian-de-angular-jsmian-shi-wen-ti/]
参考地址[https://segmentfault.com/a/1190000005836443]
1. service factory 和 provider是什么关系？
2. angualr采用什么机制的数据绑定？
3. angular中常用的路由有哪些？
4. angular中的依赖注入？
5. angualr中ng-repeated迭代数组的时候，当数组中有重复的值的时候，有什么问题，如何解决？
6. ng-if和nf-show／ng-hide有什么区别？
7. 解释下 $scope和 $rootscope的区别
8. 表达式是如何工作的{{xxxx}}
9. angular中的digest周期是什么
10. 至少列出三种不同模块之间的通讯？
11. angualr中使用jquery好么？
12. angular中$watch的使用？

### service factory 和 provider是什么关系？
1. service---**返回的是一个实例化的对象**
> 通过构造的方式创建service，返回的是一个是实例化对象
```js
	app.service('fooService', function(){
		var self = this;
		this.target = 'service';
		this.sayHello = function(){
			return 'hello' + self.target;
		}
	});
```
2. factory
> 把service的方法和数据都放在一个对象里，并返回这个对象
```js
	app.factory('fooService', function(){
		return {
			target: 'factory',
			sayHello: function(){
				return 'hello' + this.target;
			}
		}
	})
```
3. provider
> 创建一个可以通过config来配置的service，&get中返回的，就是用factory创建service的内容
```js
	app.provider('fooService', function(){
		this.configData = 'init data';
		this.setConfigData = function(data){
			if (data) {
				this.configData = data;
			}
		}

		this.$get = function(){
			var self = this;
			return {
				target:' provider',
				sayHello: function(){
					return self.configData + 'hello' + this.target;
				}
			}
		}
	});

	// 此处注入的是fooService中的provider
	app.config(function(Fooserviceprovider){
		Fooserviceprovider.setConfigData('config data');
	})
```

4. 相互之间的关系
+ 从底层来看，service调用了factory，返回实例
+ factory调用provider，返回器$get中定义的内容，
+ factory和service的功能类似，只不过factory是普通的function，可以返回任何的东西（一些私有变量），
+ service是构造，可以不返回
+ provider是加强版的factory，返回一个可以配置的factory


### angualr采用什么机制的数据绑定？
1. 脏检查机制：当view中有任何数据变化时，会更新到model，当model中数据有变化时，也会更新到view，这是需要有一个监控
2. 脏检查原理：angular在scope模型上设置了一个**监听队列**，用来监听数据变化，并更新view，每次绑定的一个东西到view上时，angular就会往**$watch**的队列中插入一条**$watch**，用来检测它的model里是否有变化的东西，当浏览器接收到可以被angular context 处理的事件时，$digest循环就会触发，遍历所有的$watch，让后更新dom

```js
	// demo
	<button ng-click='val=val+1'>increase 1</button>
	// click时会产生一次更新操作（至少触发两次$digest）
	// 1. 按下按钮
	// 2. 浏览器接收到一个事件，进入到angular context
	// 3. $digest循环开始执行，查询每个$watch是否变化
	// 4. 由于见识$scope.val的$watch报告了变化，因此强制在执行一次$digest循环
	// 5. 新的$digest循环检测到变化
	// 6. 浏览器拿回控制器，更新$scope。val新值对应的dom
	// 注意：$digest的循环上限时10次，（超出10次以后抛出一个异常，防止无限循环）
```

### angular中常用的路由有哪些？
1. angular1.x中常用ngRoute和ui.router
2. 作为框架的额外附加功能，必须以**模块依赖**的形式被注入
3. ngRouter和ui.router的区别
	+ ngRouter是angualr自带的路由模块，而ui.router是第三方模块
	+ ngRouter是基于url的，ui.router是基于state（状态的）

```js
	var app = angular.module('ngRouterApp', ['ngRoutet']);
	app.config(function($routeProvider){
		$routeProvider
		.when('/main', {
			templateUrl:'main.html',
			controller: 'MainCtrl'
		})
		.otherwise({redirecTo:'/tabs'})
	})
```

### angular中的依赖注入?
1. 依赖注入是一种设计模式，目的是处理代码之间的依赖关系
2. 例子
```js
	// 如果没有使用angular，从后台查询数据并在前端显示，可能要按照如下的写法
	var animalBox = document.querySlector('.animal-box');

	var httpRequest = {
		get: function(url, callback){
			console.log(url+'requested');
			var animals = ['cat', 'dog', 'rabbit'];
	        callback(animals)
		}
	}

	var render = function(el, http){
		http.get('/api/animals', function(animals){
			el.innerHTML = animals;
		})
	}

	render(animalbox,httpReauest);

	// 但是如果在render调用的时候不传参数，想下面这样，会报错，因为找不到el和http的依赖了，运行的时候不会自动查找依赖项
	render(); // TypeError: Cannot read property 'get' of undefined

	// 在使用angular的时候可以这样写
	function myCtrl = ($scope, $http){
		$http.get('/api/animals').success(function(data){
			$scope.animals = data;
		})
	}
```

### angualr中ng-repeat迭代数组的时候，当数组中有重复的值的时候，有什么问题，如何解决？
1. 会提示Dulicates in a repeater are not allowed，
2. 解决办法，可以通过track by $index可以解决，$index可以换位任何一个普通值，只要能标示数组中的每一项即可


### ng-if和nf-show／ng-hide有什么区别 
1. ng-if只有后面的表达式为true的时候，才创建DOM节点，
2. ng-show是在初始的时候就创建了，用display来控制显示和不显示

### 解释下 $scope和 $rootscope的区别
1. $scope是controller和html页面的链接桥梁
2. $rootscope是各个控制器中scope的桥梁

### 表达式是如何工作的{{xxxx}}？
1. 依赖于$interpolation服务
2. 在初始化页面html后，会找到这些表达式，并进行标记
3. 于是每遇见一个{{}},则会生成一个$watch，
4. $interpolation返回一个带有上下文参数的函数，最后执行那个函数
5. 表达式$parse到那个作用域上

### angular中的digest周期是什么？
1. 每个digest周期中，angular总会对比scope上的model值，
2. 一般digest都是自动触发的，但是也可以通过$apply进行手动触发


### 至少列出三种不同模块之间的通讯？
1. rootscope
2. directive指定属性进行通讯
3. service

### angualr中使用jquery好么？
1. 慢慢改掉习惯

### angular中$watch的使用
+ watch的简介
	1. 脏检查会触发watch的方法
	2. 在脏检查的digest执行时，如果watch观察的value与上次执行时候不一样，就会被触发，watch实现了页面跟随model的及时更新
	3. watch方法在用的时候主要是受冻监听一个对象，但对象发生变化时触发某个事件

+ watch方法的用法
	1. $watch(watchFn, watchAction, deepWatch);
	2. watchFn:angualr的表达式或函数的字符串
	3. watchAction(newValue, oldValue, scope),watchFn发生时会被调用
	4. deepWatch： 可选的布尔值，检查被监控的对象的每个属性是否发生变化

+ 案例
```js
	// 当name的表单改变30次，然后触发某个事件
	// 控制器代码如下
	var firstController = function ($scope) {
		$scope.name = 'zhangsan';
		$scope.count = 0;

		// 监听一个model，当一个model每次改变时，都会出啊发第二个函数
		$scope.$watch('name', function(new, old){
			++$scope.count;
			if( $scope.count > 30) {
				$scope.name = '已经大于30次了'
			}
		})；
	}

	// html代码如下
	<div ng-app=''>
		<div ng-controller="firstController">
		<input type="text" name="" id="" ng-model='name'>
		改变次数：{{count}} - {{name}}
		</div>
	</div>
```

# angular的四大核心特性
1. mvc--借助于$scope作用域来实现的
MVC > modle view controll（数据模型，视图-负责展示，控制器--业务逻辑和控制逻辑）
2. 模块化
!()[../image/angular/angular-module.png]
3. 指令系统
!()[../image/angular/angular-directive.png]
4. 双向数据绑定
!()[../image/angular/angular-exchange.png]
!()[../image/angular/one-way.png]


## 前端mvc的困难
1. 操作dom的代码必须要等待整个页面加载完成
2. 多个js文件之间如果出现相互依赖的文件，必须自己解决

## 如何使用controller，使用过程中注意定
1. 不要试图服用controller，一个控制器只负责一小块视图
2. 不要再controller中操作dom，
3. 不要再controlll中作数据格式化，ng有好用的表单控件
4. 不要再controll中作数据过滤，ng有¥filter服务
5. 一般来说，controller是不会相互调用的，控制器之间的交互通过事件进行
!()[../image/angular/angular-controller1.png];
!()[../image/angular/angular-controller2.png];
!()[../image/angular/angular-controller3.png];

## model 数据模型 $scope
## view的复用--directive

## $scope
1. $scope是一个plain old javascript object
2. $scope提供了一些工具方法 $watch/$apply
3. $scope是个表达式的执行环境
4. $scope是个树形结构
5. 子$scope对象会继承父$scope上的属性和方法
6. ng-app上存在一个$rootScope根作用域
7. $scope可以传播事件，类似dom事件，可上可下
8. $scope是数据绑定的基础 

## $scope的生命周期
> 创建，注册监控，监测模型的变化，模型监测，模型销毁
!()[../image/angular/angular-recycle.png];

















