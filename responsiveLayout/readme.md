## 响应式布局

## 什么是？
> 让一个页面可以兼容不同的分辨率的设备

## 设计原则
1. 移动优先，页面如何在多终端展示
2. 渐进增强，重复发挥硬件的最大功能

## 实现响应式布局的方法
1. css3的媒体查询，不支持的浏览器，用原生的js
2. 开源框架，boostrap，

## media query根据不同的媒体设备，给不同的展示
1. 常见的属性
	+ device-width／device-height 设备的物理宽高（屏幕的宽高）
	+ width／height 设备的实际宽高（可视区域）
	+ orientation 设备方向
	+ resolution 设备的分辨率

2. 基本语法
	+ 外联语法
	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<link rel="stylesheet" href="./css.css" media='only screen and (max-width:480px)'>
	</head>
	<body>
		
	</body>
	</html>
	```
	+ 内嵌样式语法
	```css
		@media screen and (min-width:480px) {
			body {
				background: #f00;
			}
		}
	```

	3 boostrap案例
