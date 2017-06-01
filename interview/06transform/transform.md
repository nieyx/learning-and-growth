### CSS3的transform相关属性

+ 考虑不同浏览器的兼容性，需要添加不同的前缀
	- -webkit-transform /* chrome和Safari */
	- -ms-transform 	/* IE 9 */
	- -moz-transform 	/* Firefox */
	- -o-transform /* Opera */

+ transform的属性
	- rotate
		* rotate(10deg,20deg)
	- skew
		* skew(10deg,10deg)
	- scale
		* scale(num) // 倍数
	- translate
		* translate(x,y) // 相对于本身位置移动的距离

+ 上述的四个transform的属性，都有xyz三个象限的属性值