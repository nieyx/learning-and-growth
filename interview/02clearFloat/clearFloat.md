### 浮动

#### 什么是浮动
```
元素脱离的文档流，当一个盒子使用了float的属性时，导致父级盒子不能被撑开，这种现象叫做浮动
```
#### 浮动产生的原因
```
+ 当盒子使用的float属性，float属性具有脱离文档流的特性
+ 当父级盒子没有设置高度时，导致盒子无法被撑开，
```

#### 浮动产生的副作用
```
+ 背景不能够显示
+ 边框无法正常显示
+ margin／padding无法正常显示
```
#### 清除浮动的几种方法
```
+ 为使用float的元素的父元素设置高度
+ 在使用float的元素后，加上一个空的div，添加一个clear：both的样式
+ 使用after的伪类
```

#### 为什么overflow可以清除浮动
+ 因为当使用overflow的时候，触发了BFC--block formating context，块级格式化上下文


### BFC
> block formatting context 块级格式化上下文，触发了bfc之后，独自的渲染区域， 

+ 什么情况会触及底层的BFC(5种)
	- float的值不为none
	- overflow的值不为 visible
	- display的值为table-cell，table-caption，inline-block中的任何一个
	- position的值不为relative和static
	- width|height|min-width|min-height：（！auto）

+ ie8以下的haslayout，和bfc有相同的意思
	- zoom:(!normal)

### 为什么overflow和zoom可以清除浮动

1. float
+ float出现的原始意义：**是为了解决图片环绕的问题**
+ float的包裹性，float是一个就有方向位置的display：inline-block

2. zoom 可以清除在ie下的浮动
> 子元素的浮动，父元素不随之扩大















