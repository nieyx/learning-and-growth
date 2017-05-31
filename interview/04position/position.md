### posiion的四个值的区别和用法


#### positon的四个值
```
relative
absolute
static
fixed
```
#### 值的区别和用法
+ relative

```
relative:是相对于本身所偏移的位置，使用之后，不会脱离文档流
```
+ absolute

```
absolute：是相对于第一个不为static父级盒子；脱离文档流
```
+ fixed
```
fixed： 相对于浏览器窗口或者是iframe的窗口；
```

+ static
```
static：默认的属性，在文档流中
```

#### z-index的使用

```
当使用了position的属性时，才会生效
```
