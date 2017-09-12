## 移动端开发

### viewport适口
1. 默认不设置viewport一半可是区域宽度在移动端是980
2. width 可视区域的宽度 （number || device-width）
3. user-scalable 是否允许用户缩放， （yes || no） ios10以上无效
4. initical-scale 设置缩放比
5. minimum-scale 最小缩放比例
6. maxmum-scale 最大缩放比例
7. devicePixelRatio 像素比，把一个像素方法址n倍去显示



### 禁用拨打电话和邮件发送设置
```js
	<meta name='foramt-detection' content="telephone=no">

	<!-- 设置上述之后，若再想设置拨打电话的功能，则href='tel:132xxxxxxxx' -->

```


### rem  + less + kola
```js
	// 	动态的计算html的根元素的fontsize
	document.addEventListener('DOMContentLoaded',function(){
		doucment.getElementByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
	})
```
```css
	<!-- 在css的使用过程中，要相对于根元素进行一个计算 -->
	<!-- 如果设计稿750px -->
	<!-- 1rem = 750 / 10 = 75px;   -->
	<!-- @r: 75rem   -->
	<!-- 100 / @r = 实际的计算100px相对的rem的尺寸   -->
```

## 弹性盒模型flex/box
### 新版旧版的对比
1. 为要设置弹性盒模型，设置dispaly属性：display:box/display:-webkit-box;
2. 主轴方向：
	+ flex： flex-direction: row || column || row-reverse || column-reverse; // 横向，纵向，横向反序，纵向反序
	+ box：-webkit-box-orient: horizontal || vertial // 横向，纵向
	+ box：-webkit-box-direction: reverse || normal;
3. 主轴富裕空间的管理：剩下空间的分配
	+ flex： 
		- justify-content:flex-start || center || flex-end || space-between || space-around
	+ box：
		- -webkit-box-pack: start || end || center || justify(space-between)
4. 侧轴富裕空间管理
	+ flex： align-items:flex-start || center || flex-end || space-between || space-around
	+ box：-webkit-box-align: start || end || center 
5. 元素的弹性空间
	+ flex： flex-grow：设置在子元素，根据具体的数值，分配不同的宽度
	+ box：-webkit-box-flex
6. 设置元素的具体位置
	+ flex： order，越小越靠前，可以使用负值和0，
	+ box：-webkit-ordinal-group，越小越靠前，可以使用负值和0,但是最小值会被处理成1


## 响应式开发
### @media 媒体查询
1. 使用实例

```css
	<!-- @media一般放在css样式的底部，因为有可能会覆盖默认的css样式 -->
	@media  all {
		<!-- 所有媒体类型 -->
	}	
	@media only screen {
		<!-- 仅仅在彩屏设备上识别 -->
	}
	@media all and (min-width: 500px) {
		<!-- and是用于连接媒体类型和条件-->
		<!--  当屏幕大于500px时，显示#f00-->
		.box {
			background-color: #f00;
		}
	}
```

2. 媒体属性
	+ min-width  当大于等于某个值的时候会执行
	+ max-width  当小于等于某个值的时候会执行

3. and 是连接媒体属性值
4. not 是来排除某种属性
5. 横竖屏的出本检测
	+ orientation： portrait／landscape 垂直／水平，是通过检测可视区的宽高比来检测，
	> 缺点：当通过输入框等方式调用输入键盘，那么触发屏幕的检测，导致页面横竖屏切换

6. 样式的引入方式
	+ @media，放在css的底部
	+ link标签
	```css
		<link rel="stylesheet" href="url" media='all and (min-width:xxx px;)'>
	```
	+ @import 的方式
	```css
		@import url('url') (min-width: 767px)

	```

### 移动端的事件
1. touch事件
	+ touchstart 手指按下
	+ touchmove 手指移动
	+ touchend 手指抬起
2. touch事件要优先于pc端事件，优先300ms执行，文档地址[https://segmentfault.com/a/1190000003848737]

	+ 引出的移动端的**点透问题**
	+ 当上层元素发生点击之后，下层元素也有点击（焦点）特性，如果上层元素消失会隐藏，目标点就会漂移到下层元素身上，就会触发点击行为
	+ 解决方案 
	```js
		// 方法1
		<!-- 不要使用有点击（焦点）特性的元素，但是不利于seo -->

		// 方法2
		<!-- 阻止pc的事件 e.preventDefault-->
	```

3. 在ios10下禁止使用unserscale=no是不可行


### 移动端的event事件
1. touches
> 在屏幕上所有手指手指的相关信息

```js
	<!-- detail -->
	<script>
		var div = document.getElementById('div');
		document.addEventListener('touchstart', function(e){
			// 阻止一些默认的事件
			e.preventDefault();
		})
		div.addEventListener('touchstart', function(e){
			console.log(e.touches);
			this.innerHTML = e.touches.length; // 屏幕上的所有手指信息
		})
	</script>
```
2. targetTouches
> 在当前目标元素上的手指信息

```js
	<!-- detail -->
	<script>
		var div = document.getElementById('div');
		document.addEventListener('touchstart', function(e){
			// 阻止一些默认的事件
			e.preventDefault();
		})
		div.addEventListener('touchstart', function(e){
			console.log(e.touches);
			this.innerHTML = e.targetTouches.length; // 屏幕上的所有手指信息
		})
	</script>
```
3. changedTouches
> 在当前目标元素上的，手指移动信息

```js
	<!-- detail -->
	<script>
		var div = document.getElementById('div');
		document.addEventListener('touchstart', function(e){
			// 阻止一些默认的事件
			e.preventDefault();
		})
		div.addEventListener('touchstart', function(e){
			console.log(e.touches);
			this.innerHTML = e.changedTouches.length; // 屏幕上的所有手指信息
		})
	</script>
```


