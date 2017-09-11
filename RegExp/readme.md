## 正则表达式
> 对字符串的操作

1. 4个常用的方法 test search match replace

```js
	<script>
		<!-- test, 返回true和false -->
		var str = 'abc';
		var re = /a/;
		var re1 = /ac/;
		re.test(str); // true
		re1.test(str); // false

		<!-- search， 类似于indexOf，返回的是是字符串中相应的字符的位置，如果没有，则返回-1 -->
		var str = 'abc';
		var re = /a/;
		var re1 = /d/;
		str.search(re); // 0
		str.search(re1); // -1

		<!-- match， 返回的是一个数组，数组中存放的是匹配出来的子项，，如果没有匹配成功，就返回null -->
		var str = 'abc123wde31341cdsafr56vf111';
		var re = /\d+/g;
		str.match(re); // [123,3134,56,111]

		<!-- replace，可以将匹配的正则项替换成新的字符串，replace的第二个参数可以是一个匿名函数 -->
		var str = 'abc123wde31341cdsafr56vf111';
		var re = /\d+/g;
		var str1 = str.replace(re, "*");
		console.log(str,str1); // str1只会被替换一个*号，abc*wde*cdsafr*vf*

		// 要想替每个数字都替换成一个星号，就要用到replace中匿名函数的用法
		var str2 = str.replace(re, function($0){
			console.log($0) // $0中存放的是每次匹配成功的项目，依次输出123，3134，56，111
			var tmp = ''; // 定义一个临时的变量来存储星号
			if ($0 > 1) {
				for(var i = 0; i<$0.length; i++){
					tmp += '*';
				}
			}
			return tmp;
		});

		console.log(str2); // abc***wde*****cdsafr**vf***
		</script>
``` 
2. 正则中的小括号和字符类
>  在中括号里的^ , 代表了非，除了这些项的意思，但是不在中括号中，是已某个字母开头，$是已某个字母结尾

```js
	<script>
		// 小括号，子项
		var str = 'abcdddefghijk';
		var re = /(\w){2,}/;
		var re1 = /(\w)\1+/g;
		console.log(str.match(re)); // ["abcddefghijk", "k", index: 0, input: "abcddefghijk"]
		console.log(str.match(re1)); // [ddd]

		// 中括号：字符类 的意思
		var str = 'abcd';
		var re = /a[bcd]d/;
		var re1 = /a[bcd]+d/;
		console.log(re.test(str)); // false
		console.log(re1.test(str)); // true
	</script>
``` 

3. 正则中的量词
+ （* + ?） 分别代表了 （>= 0 , >=1,  0或是1）
+ {m,n} >=m && <=n
+ {m,} >=m
+ {m} 正好是m个

```js
	<script>
		var str = 'abcdddefghijk';
		var re = /\w{2,3}/g;
		console.log(str.match(re));// ["abc", "ddd", "efg", "hij"]
	</script>
```

4. 转义字符
+ \s \S 空格，非空格
+ \w \W 字母数字下划线，非字母数字下划线
+ \d \D 数字，非数字
+ \b \B 开始，结束和空格，非开始，结束和空格

### 应用
1. 找出字符串中出现次数最多的字符

```html
	<script>
		var str = 'qaxbhaudsfbhaaasdjkhfquaaaajsdhaaaaaa';
	// 传统中用js的方式
	function findMaxChar(str) {
		var charObj = {};
		for(var i=0; i<str.length; i++){
			if (!charObj[str.charAt(i)]) {
				charObj[str.charAt(i)] = 1;
			} else {
				charObj[str.charAt(i)] += 1;
			}
		}
		var maxLength = 0;
		var maxKey = {};
		for(var k in charObj) {
			if (charObj[k] > maxLength){
				maxLength = charObj[k];
				maxKey = k;
			}
		}
		return {maxkey:maxKey, maxLength: maxLength};
	}

	findMaxChar(str); // {maxkey: "a", maxLength: 15}
	
	var str = 'qaxbhaudsfbhaaasdjkhfquaaaajsdhaaaaaa';
	// 用正则的方式
	function findMax(str){
		var newStr = str.split('').sort().join(''); // aaaaaaaaaaaaaaabbdddffhhhhjjkqqsssuux
		var re = /(\w)\1+/g;
		var len = 0;
		var key = '';
		var str = newStr.replace(re, function($0, $1){
			// console.log($0); // aaaaaaaaaaaaaaa bb ddd ff hhhh jj qq sss uu 
			// $1 代表正则匹配的表达是中第一个括号里的内容
			if ($0.length > len) {
				len = $0.length;
				key = $1;
				console.log(key,len);
			}
		})
		return {key:key, len:len}
	}

	findMax(str); // {key: "a", len: 15}
	</script>
``` 

2. 正则获取class的方法

```html
	<ul>
		<li class='box1'>1</li>
		<li>2</li>
		<li class='box1box2'>3</li>
		<li>4</li>
		<li class='box1 box2'>5</li>
	</ul>
	<script>
		// 传统的方式
		var lis  = getClass(document, 'box1');
		for (var i = 0; i < lis.length; i++) {
			lis[i].style.background = "#f00";
		}
		function getClass(o, c){ 
			// 此种方法的弊端是指识别第一个box1的情况，第二三中情况不识别
			var arr = [];
			var lis = o.getElementsByTagName('*');

			for (var i = 0; i < lis.length; i++) {
				if (lis[i].className == c) {
					arr.push(lis[i]);
				}
			}
			return arr;
		}
		// 正则的方式
		function getClass(o, c){
			var arr = [];
			var lis = o.getElementsByTagName('*');

			var re = new RegExp('\\b'+ c +'\\b');
			for (var i = 0; i < lis.length; i++) {
				if(re.test(lis[i].className)){
					arr.push(lis[i]);
				}
			}

			return arr;
		}
	</script>
	
```

3. 去掉字符串的首尾空格

```js
	<script>
		var str = '     hello      ';
		function trim(str){
			var re = /^\s+|\s+$/g;
			return str.replace(re, '');
		}
		console.log(trim(str));
	</script>
``` 

4. 匹配中文/\u4e00-\u9fa5/
