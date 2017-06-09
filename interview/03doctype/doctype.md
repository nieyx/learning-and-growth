### Doctype 
1. 什么是doctype
2. 如何设置doctype
3. 标准模式和怪异模式
4. 如何触发这两种模式
5. 如何判断当前使用的模式
6. 如何解决不同模式带来的问题及如何解决

#### 什么是doctype

> 1. doctype 是文档标准类型的声明
> 2. 出现在文件的第一行
> 3. doctype不是html标签，是指令，指示web浏览器文档关于页面使用哪个html的版本规范进行编写的指令
> 4. 目的：告诉浏览器使用什么样的文档定义（DTD）来解析文档

#### 如何设置doctype
>
> 1. html4.0.1 有三种声明格式
> 2. html5 ：使用最新的html的格式，因此是不需要DTD的引用
> 3. html4.0.1与html5的差别
>>	- 4.0.1 是基于SGML，而5.0不是，所以引用的方式不同
>>	- SGML -- standard generalized makeup language


#### 标准模式和怪异模式
>
> 1. 标准模式：浏览器按照w3c的标准来解析执行代码
> 2. 怪异模式：浏览器用宽松的方式，来解析


#### 如何触发这两种模式
>
> 文件首行的doctype声明

#### 如何判断当前使用的模式
 ```js
 window.top.document.compatMode
 // css1Compat 标准模式
 // backCompat 怪异混杂模式
 ```
#### 如何解决不同模式带来的问题及如何解决

> + 不同的模式，对浏览器的影响
>>	- 对于chrome，ff，没有很大的差别，但是对于ie浏览器来说，有一定的差别
>>	- 对于ie 的差别主要体现在盒子模型上
> + ie下的盒子模型
>>	- 标准模式下的盒子模型
		* margin padding border content四部分组成
		* 宽度为content部分，不包括其他的部分
		* 外盒尺寸：content + padding * 2 + border * 2 + margin * 2
>>	- 怪异模式下的盒子模型
		* 同样由四部分组成
		* 宽度为content + padding * 2 + border * 2 
		* 外盒尺寸： content + padding * 2 + border * 2 + margin * 2
> + 解决方式：
>>	- 使用box-sizing来声明，
		* border-box
		* content-box

