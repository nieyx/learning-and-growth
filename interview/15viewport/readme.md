## 自动适应页面宽度

文档地址[http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html]
简书文档[http://www.jianshu.com/p/ec5a1a30694b]

### 基本概念
> 1.屏幕的尺寸
>
> 2.屏幕分辨率
>
> 3.屏幕像素密度
>
> 4.屏幕尺寸／分辨率／像素密度之间的关系
>
> 5.密度无关像素
>
> 6.独立比例像素

+ 屏幕的尺寸
> 手机对角线的屏幕尺寸，单位英寸，1英寸=2.54cm

+ 屏幕分辨率
> 1.手机在横向和纵向上像素点的总和
>
> 2.一般描述宽高=AxB，屏幕在横向（宽度）上有A个像素点，在纵向方向（高）有B个像素点
> 3.




+ 自适应viewport
- viewport是页面默认的宽度和高度
- width=device-width，将设备的宽度设置成页面的宽度
- initial-scale=1 不进行缩放

```html
	<meta name='viewport' content="width=devicewidth, initial-scale=1">
```