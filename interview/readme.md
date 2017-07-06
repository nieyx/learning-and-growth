2017年5月20日搜狗面试题
1. doctype的作用是什么?页面中有没有它的区别是?
2. w3c标准盒模型占位宽度是如何计算的?它与IE盒模型有什么不同?
3. 请说下移动端常见的适配不同屏幕大小的方法?
4. 一个高宽未知的图片如何在一个比它大的容器内水平垂直居中?
5. label标签的作用是什么?
6. 定义链接四种状态的伪类的正确书写顺序是?
7. 你知道的css选择器有哪些?
8. 下面两个div的间距应该是多少?为什么?
<div style="margin:5px"></div><div style="margin:10px"></div>
9. png8、png24的区别是什么?
10. png和jpg这两种图片格式分别适用的场景是?
11.请介绍下你知道的前端性能优化方法?
12. 页面导入样式时，使用link和 @import有什么区别?
13.请介绍下css中针对ie6-9常用的hack方法
14. Javascript的基本数据类型有哪些?
15.请介绍下Javascript原型、原型链的特点?
16.曾经用原生Javascript实现过什么功能?
17. 请用jquery和原生Js分别实现添加、移除、移动、复制、创建和查找DOM节点
18. 实时监测用户在input内输入的字符数应该监听哪个事件?
19. 遇到疑难问题时，你通常是如何解决的？最好举例说明
20. inline、inline-block-block的区别是?

2017年5月20日用友面试题 
1. 请写出以下代码运行结果
var fullName = 'langulage';var obj = {  fullName:'javascript',  props:{    getFullName:function(){      return this.fullName;
    }
  }  console.log(obj.prop.getFullName());  var test = obj.prop.getFullName;  console.log(test());
}
2. 请写出以下代码运行结果
var name = 'window';var Tom = { name:"Tom", show:function(){   console.log(this.name);
 }, wait:function(){   var fun = this.show;
   fun();
 }
};
Tom.wait();
3. 在String对象上定义一个repeatify函数。这个函数接受一个整数,来明确字符串需要重复几次。这个函数要求字符串重复指定的次数。比如: ‘abc’.repeatify(3); abcabcabc
4. 正则匹配输出’hello[哈哈]world’
var str = 'hello<img src="haha.png" alt="哈哈" />world';
5. 请罗列常用清除浮动方案
6. 陈述Zepto tap事件点透的原因及解决方案
7. 解释一下Javascript 的同源策略，你所能了解到的ajax跨域解决方案以及各种方案的优缺点。
8. 罗表移动前端常用自适应解决方案
9. cookie、localStorage、sessionStorage三者优缺点，适用场景

2017年5月16日 汽车之家面试题
1.	复杂型数组重排，类似于数组去重?
2.	百度首页所有元素共有多少个标签?用原生JS编写
3.	require.js的实现原理
4.	require.js、sea.js和common.js的区别?
5.	简单的CSS问题

2017年5月16日 VIPKID的面试题
1.	bind方法的原理
2.	实现forEach
3.	移动端/PC端的区别
4.	你认为最好的代码是什么样子的？
5.	ES6了解过吗？
6.	替换域名 http://abc.com/a/b => localhost:8080/a/b
7.	如何实现前后端分离？如何约定API？
8.	前端构建流程
9.	在上一个公司里学到了什么？
10.	Angular/Vue/React如何选型?
11.	有没有别的公司offer?
2017年5月16日蚂蚁金服北京面试题
1.	面向对象
2.	闭包
3.	:display:inline-block有间隙如何处理？

4.	node.js
5.	expres.js 
6.	apply和call的区别
7.	css有哪几种选择器
8.	react原理
9.	说一下mvc框架
10.	http/https的区别
11.	原生ajax实现的步骤
12.	requirejs原理
13.	ajax/jsonp区别?jsonp原理
14.	为什么大部分网站css/js/img分不同域名引入
15.	页面重构分三个步骤，说说看？
16.	优化页面性能有哪几种方式？
17.	事件监听
18.	js上拉加载和下拉刷新的实现方法？
19.	es6语法新特性
2017并行科技前端面试题
1. css
1.1 简要手绘盒子模型，并对边框和边距进行标注?
1.2 界面div三平分除了flex布局外，简写其它两种布局代码?
2. javascrpt
2.1 es6中let const var的区别是什么?
2.2 对数组[5,6,6,7,8,8]进行去重，es5或者es6方法
2.3 谈谈对es6中=>的理解
2.4 点击一个按钮，发出ajax请求，如何防止 用户在此请求方式返回之前再次点击?
2.5 封闭一个深度克隆方法es5或es6?
2.6 请用正则校验身份号码，要求符合15位或18位，末尾可能是X
3. html5&css3
3.1 html5和css3新增了哪些标签和属性?
3.2 用css3写一个开关按钮，按下时置灰变色，并改变按钮文字(如按下之前是on,按下之后是off)
4. http
4.1 http和https请求的区别是什么？post请求和get请求的区别是什么?
5. 前端框架和模板
5.1 使用过的前端框架有哪些?
5.2 使用过的模板引擎有哪些?
5.3 使用过的模块加载器有哪些?
5.4 简写ReactNative中使用es5和es6如何绑定的this？
5.5 如何理解 前端MVC架构，简要画出流程图


58赶集
三面
1. var url = http://www.58.com?a=1&b=2$c
function fn(url){
}
实现fn(url)输出 {a:1,b:2,c:true}
2.post跨域请求和服务端交互的流程
3.常用状态码含义 (什么时候出现304 if-modify-since等 ,304是否向服务端发请求,304响应是否有body)
4.实现fn()排序
fn(3,6,4,1) 输出 [1,3,4,6]
fn(4,2,6)输出[2,4,6]
5.DOM diff原理?虚拟dom是否是fragment
6.typeof 1   typeopf "1"  typeof String 返回什么  (number string function 注意大小写)
7.cookie session的实现原理和机制
8.decodeURI  decodeURIComponent encodeURIComponent encodeURI区别

二面
1.网络安全问题(单点登录 outh认证 登录密码等敏感信息前端如何保证安全)
2.跨域问题怎么实现
3.团队管理的时间进度怎么控制
4.都用过哪些设计模式
5.数据结构和算法了解多少
6.分析自己做的项目的架构

一面
1.eval函数什么时候用到,有什么吭
2.jq选择性能问题
3.jq defer函数怎么实现
4.requirejs实现原理  requirejs怎么实现就近加载模块
5.ajax原生怎么实现
6.描述redux流程
7.react怎么实现日志功能(中间件)
8.中间如果是异步怎么处理
9.后端nodejs代码用webpack打包的话会有什么问题(核心模块会被打包)
10.react里父组件 自组件之间的通信
11.正则表达式 '.' '+' '*' 分别表示什么
12.node模块中path.relative方法什么作用
13.说下你自己觉得最复杂的项目


百度互联网创投中心 2017.7.4
1.	常见的行内元素
2.	input标签中readonly和disabled的区别
3.	html新增了那些标签，input新增了哪些类型
4.	div剧中
5.	css中的伪类
6.	判断数据类型的方法
7.	写下运行结果

```html
	<script>
		var x=1,y=z=0;
		function add(n){
			return n=n+1;
		}
		y=add(x); // 4
		function add(n){
			return n=n+3;
		}
		z=add(x); // 4

		// 相当于以下的函数
		var x=1,y=z=0;
		function add(n){
			return n=n+1;
		}
		function add(n){
			return n=n+3; // 将第一个函数覆盖
		}
		y=add(x); // 4
		z=add(x); // 4


		var myobj = {
			num:2,
			add:function(){
				this.num = 3;
				(function(){
					console.log(this.num); // undefined 函数被直接调用时，指向window或者undefined
					this.num = 4;
				})();
				console.log(this.num) // 3
			}
		} 

		var i;
		for ( i = 0; i++ < 3) {
			setTimeout(function(){
				return function(){console.log(i)}
			}(),0)
		} // 三个4


	</script>
```
8.	js的继承方式，以下代码如何实现继承
```html
<script>
	function People(){
		this.type = '';
	}
	function Man(){
		this.name = '';
	}

	Man.protoType = new People();
</script>
```

9.给一个数组重新排序

```html
	<script>
		var arr = [12,1,2,3,23,45,7,8,0];

		// 实现方式1，用es6的方法
		var arrSort = [12,1,2,3,23,45,7,8,0,1,2,1,2,4,5,6,1];
		var s = arrSort.filter(function(ele, index, arr){
			return arr.indexOf(ele) === index
		})
		console.log(s)
		s.sort(function(x,y){
			if(x>y){
				return 1;
			}
			if (x<y) {
				return -1;
			}
			return 0
		})
		console.log(s)
		// 实现方法2
		var arrSort1 = [12,1,2,3,23,45,7,8,0,1,2,1,2,4,5,6,1];
		function arrSort(arr){
			var arr1 = [];
			for(var i=0;i<arr.length;i++){
				if(arr1.indexOf(arr[i]) === -1){
					arr1.push(arr[i])
				}
			}
			console.log(arr1)
		}
		arrSort(arrSort1);
	</script>

```
10.写出一个函数的序列化url
```html
	var url = 'http://3g.baidu.com?username=zhangsan&age=18&address=qweqwe'; // 转换成{'username':'zhangsan','age':'18','address':'qweqwe'}
```

11.html5的websocket

12.跨域

13.移动设备的兼容处理，浏览器兼容的处理

14.正则表达式

15.viewport

16.数组的基本操作方法

17.css的3d变换的使用

















