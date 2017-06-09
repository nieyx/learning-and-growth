### flex 弹性盒子
1. 什么是flex
2. 弹性盒子的基本概念
3. 容器的属性
4. 项目的属性

> [详细文档地址]: <http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html>  "语法"
> [详细文档地址]: <http://www.ruanyifeng.com/blog/2015/07/flex-examples.html>  "案例"

#### 什么是flex

> + flex是flexable box的简称，是弹性盒子
> + 任何一个容器通过display：flex都可以被设置成弹性盒子

#### 基本概念

> + 采用flex布局的元素，成为flex容器，flex container
> + flex容器中的每一项，称为flex items
> + 容器磨人由两根轴，main axis，cross axis
> + 主轴开始的位置称为main start，结束位置main end
> + 侧轴开始的位置称为cross start，结束位置为cross end
> + 项目默认占主轴的位置为main size，占侧轴的位置为cross size


#### 容器的属性

> 共有6个属性
> + flex-direction: 主轴的方向
>>	- row
>>	- row-reverse
>>	- column
>>	- column-reverse
> + flex-wrap: items是否换行
>>	- nowrap
>>	- wrap
>>	- wrap-reverse
> + flex-flow:是flex-direction和flex-wrap的合体
> + justify-content:items按照主轴的排列方式
>>	- flex-start／flex-end
>>	- center
>>	- space-between
>>	- space-around
> + align-items:items按照侧轴的排列方式
>>	- flex-start／flex-end
>>	- center
>>	- space-between
>>	- space-around
> + align-content:在交叉轴上如何对齐

#### 项目的属性
> + order： 取值越小越靠前
> + flex-grow
> + flex-shrink
> + flex-basic
> + flex
> + align-self

