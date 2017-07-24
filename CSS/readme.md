## css的相关知识点

### css的选择器
文档地址[http://www.ruanyifeng.com/blog/2009/03/css_selectors.html]


### css的collapse属性
+ visibility有hidden，collapse，inherit，visible四个属性
+ 在设置表单元素时，有如下的功能
	- collapse在**非**chrome浏览器中，与display：none有相同的效果，隐藏，不会占用位置
	- collapse在chrome浏览器中，以visibility:hidden 有相同的效果，隐藏内容，还占用位置

### css 绘制三角形
+ 一个盒子的边框的一层一层向外画，边框约粗看的越明显
```css
	.box {
		width:0;
		heihgt:0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 50px solid #f00;
	}
```

1. 什么是css的盒模型，IE低版本的盒子模型又何不同
+ 盒模型有两种，ie盒子模型和w3c盒子模型
+ 盒模型：content padding margin border
+ ie：border-box，w3c：content-box
![](../image/box/ie.png)
![](../image/box/w3c.jpg)

2. css的选择器有哪些，css有哪些属性可以继承？
+ css的选择器
	- id选择器 （#id）
	- 类选择器 （.class）
	- 标签选择器 （input）
	- 后代选择器 （ul li）
	- 属性选择器 （input[type=‘btn’])
	- 伪类选择器 （a：hover）
+ css不可继承的属性：padding margin border height width 
+ css 可以继承的属性： font-size color 

3. css的优先级算法如何计算？
+ 就近原则，后面的会覆盖前面的
+ 行内样式 > 嵌入样式 > 外部引用的样式
+ !imporant  > id > class > 标签

4. css有哪些伪类和伪元素
+ 伪类：LVHA，hover,
+ before after ::selection first-letter first-line

5. 如何居中一个div
```css
	<style>
	.box {
		 display: flex;
		 justify-content:center;
		 align-items:center;
	}
	</style>
```

6.display 有哪些值。并说明她们的作用
+ none 隐藏元素
+ block 让元素块级显示，独占一行
+ inlin-block 默认宽度为内容宽度，可设置宽高
+ inline 默认宽度为内容宽度，不可设置宽高
+ table 和table一起使用
+ inherit 继承父元素的display的属性

7. position的属性
+ relative 相对于自身的定位
+ absolute 想对于第一个值不为static的定位的父元素
+ fixed 根据浏览器的窗口进行定位
+ static 没有定位
+ inherit 继承父元素的定位

8. css3有哪些新的属性
+ 圆角 border-radius
+ 阴影 shadow
+ 文字特效 text-shadow
+ 旋转 transform 
+ 运动 transition

9. css3中的flexbox，弹性盒模型
+ 任何元素通过设置display:flex都可以变成弹性盒模型，变成一个伸缩模型
+ 在盒模型内，所有的子元素，都成为和模型的条目，flex-items

10. css的多列等高如何实现？
文档地址[https://codepen.io/yangbo5207/post/equh]
+ padding-bottom 和margin-bottom

11. 经常遇到的浏览器兼容性问题有哪些？原因，怎么处理的？常用的hack技巧
+ png24的图片，在ie6上会出现背景，解决方案是使用png8来代替
+ 不同的浏览器，默认的padding和margin是不同的，解决方案是在css文件中清楚padding和margin的默认样式
+ ie6的双边距问题
> 块属性设置了float之后，又设置了magin，ie6上显示的margin是双倍的宽度,解决办法是设置*display：inline
+ chrome中，默认字体最小是12px，小于12按照12px显示，可通过设置css的属性：-webkit-text-size-adjust:none;来解决

12. li和li之间，看不见的空白间隙是什么原因引起的？有什么解决办法?
+ display:inline-block ,是由于空格，空过也算字符
+ 解决办法
	- font-size：0
	- word-space：-个数 * 2
13. 什么是BFC，
+ BFC block formatting context
+ BFC北部的元素和外部的元素不会相互影响



















