## link 与 @import的区别

+ link的html的标签，@impport是css提供的方式
+ link是在浏览器被加载的时候，就会引入样式，但是@import是在页面加载完成后，在引入样式
+ link是可以通过dom来更改样式的，而import是不可以通过dom来操控的
+ link标签不存在兼容性的问题，import是css2.1提出的