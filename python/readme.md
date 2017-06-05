## python学习

### mac下安装
+ 安装homebrew
+ 直接使用brew install python3
+ mac电脑系统自带的是python的版本是2.7

### python的运行环境
+ 在终端输入python3，进入python环境
+ 在>>> 后可以输入：
	- 表达式，可以直接进行计算
	- print(''),想打印输出的内容
+ 退出python的编译环境，
	- 在>>> 输入exit();
	- 在mac下，按control+z，退出编译
+ 在终端环境下，可输入python name.py，会直接执行name.py中的内容

+ mac下可以直接运行.py的文件
	- 在文件中
		```python
			#!/usr/bin env python3

			print('hello python');
		```
	- 在终端给.py文件添加权限
		```
			chmod a+x hello.py
		```
### python的输入输出
	```python
		name = input('please enter your name');
		print('hello ,', name)
	```