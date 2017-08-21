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


### rem  + less + kolar
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

### 弹性盒模型flex/box
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
