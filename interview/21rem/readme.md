## 移动端web的适配利器-rem
viewport[https://www.cnblogs.com/2050/p/3877280.html]
rem[http://www.alloyteam.com/2016/03/mobile-web-adaptation-tool-rem/#prettyPhoto]
rem&viewport[https://www.cnblogs.com/2050/p/3877280.html]
### 什么是rem
> rem是设置字体大小的，font size of root element
>
> 相对于根元素，一般般默认情况下，根元素的大小是16px

```css
	html {
		font-size:16px; <!-- 1rem = 16px -->
	}
	<!-- 给p标签设置12px的字体，算法如下 -->
	<!-- 12/16=0.75 -->
	p {
		font-size: 0.75rem; 
 	}
```

### rem进行屏幕适配
1. 告诉直接设置成固定值，宽度一般撑满整个屏幕
2. 通过百分比来设置元素的大小来进行适配，或着用flex来设置需要定制宽的
3. 根据屏幕不同的大小来设置样式，利用css3的媒体查询