## jade模版引擎
> 将动静部分柔和成一种实现机制或者技术，将数据添加页面的占位符中
> 解决了深层次桥套

## 书写格式

## 命令行的使用
1. 全局安装了jade后，jade filename 可以将文件转化为html的格式，转化的是压缩后的，使用（jade -P filename，可以转化成为压缩的，带缩进的）
	+ jade -P filename 未压缩的jade编译后文件
	+ jade -P -w filename 实时编译jade文件

## jade语法
1. 一般不用封闭标签，父子标签使用层级缩进
```html
	doctype
		html
			head
			meta
		body
			div
```
2. 书写class和id时，直接拼接在标签的后面，中间没有空格
```jade
	doctype
		html
			head
			meta
		body
			div.class#id
```
3. 熟悉一些自定义属性的时候，可书写在括号中
```jade
	doctype
		html
			head
			meta
		body
			div.class#id
			a(title='this is a link')
```
4. 书写大段的内容时候，可在标签后面直接跟上一个.，然后文本换行书写即可，如文本中仍有其他的标签，直接使用闭合的标签
```jade
	doctype
		html
			head
			meta
		body
			div.class#id
			a(title='this is a link')
			p.
				1. 
				2.
				3.
```
5. 注释和条件注释
	+ 注释 // 
	+ 不会被编译的注释 //-
	+ 条件注释，ie6789的注释
		<!-- [if IE 8]html(class=ie8)[ end if] -->

6. 写内连样式和js文件的时候，之后在style和script标签后拼接一个.，然后换行锁进，书写内容
```jade
	doctype
		html
			head
			meta(charset='utf-8')
			style.
				body {
					color: #f00;
					background: #f0f0f0;
				}
				script.
					var jadeVar = 'jade'
		body
			div.class#id
			a(title='this is a link')
			p.
				1. 
				2.
				3.
```

7. jade的变量声明和数据传递
	+ 在页面中声明一个变量
	```jade
	doctype
		html
			head
			meta
			- var couse = 'jade'
			title #{counse}
		body
			div.class#id
	```
	+ 在命令行中输入
	> jade -P -W index.jade --obj {"course": "jade1"}
	+ 引入json文件
	> jade -P -W index.jade -O index.json
	```json
		{
			"course": "jade3";
		}
	```

8. jade的安全转义与非转义

















