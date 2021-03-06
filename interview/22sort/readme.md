## 各种排序

### 冒泡排序
文档地址[http://www.cnblogs.com/zichi/p/5556633.html]
> 每次循环之后，将最大的元素，冒泡到最后一位
+ 工作原理
	- 如数组 arr = [1,5,2,4,3];
	- 循环数组，第一次循环，1和5比较，1<5,顺序不变，[1,5,2,4,3];
	- 然后5>2，交换位置，数组变成 [1,2,5,4,3];
	- 然后 5>4,交换位置，数组变成 [1,2,4,5,3];
	- 然后 5>3,交换位置，数组变成 [1,2,4,3,5];
	- 然后在进行[1,2,4,3]的排序，原理如上


```js
	<script>
		// 交换数组中的位置
	function sort(arr,a,b){
		var tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	}

	// 开始循环数组
	function bubbleSort(arr){
		var _array = arr.concat();
		// 循环数组中的第一项和其他项比较，开始冒泡
		for (var i=0,len=_array.length;i<len;i++){
			for(var j=0; j < len - i - 1;j++) {
				if (_array[j] >= _array[j+1]){
					sort(_array,j,j+1);
				}
			}
		}
		return _array
	}

	// 开始引用
	var arr = [1,5,2,4,3,1];
	var arrSort = bubbleSort(arr);
	console.log(arrSort);
	</script>
```

### 选择排序
> 选择排序每次循环都会找到最值下标，然后将该元素交换到最前面，选择排序每次循环值交换一次，不会向冒泡一样，多次交换
+ 工作原理
	- 如数组 var arr = [1,5,2,4,3];
	- 第一次循环，默认下标为0，最值为1，
	- 分别和5,2,4,3进行比较，
	- 比较完成后，最值下标还是0，
	- 然后开始 第二轮比较，[5,2,4,3];

```js
	<script>
		// 进行数组位置的交换
	function swap(arr,a,b) {
		var tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	}
	// 选择排序
	function selectionSort(arr){
		var _arr = arr.concat();

		// 开始循环
		for(var i=0,len=_arr.length;i<len;i++){
			// 最值的下标,将数组中的第一个值，默认为首次的最值
			var index = i;
			for (var j= i + 1;j < len; j++) {
				if (_arr[j] < _arr[index]) {
					index = j;
				}
				swap(_arr,index,i)
			}
		}
		return _arr;
	}
	// 开始引用
	var arr = [1,5,2,4,3];
	var arrSort = selectionSort(arr);
	console.log(arrSort);
	</script> 	
```

### 插入排序
> 分为已排序和未排序，相比冒泡和选择排序，效率更高
>
> 开始已排序的元素只有一个，然后将其后面的元素，从未排序插入到已排序中，然后已排序多一个，未排序少一个

+ 工作原理
	- var arr = [1,5,2,4,3];
	- 外层需要循环5次，假设循环到第三次，前面已排序已有[1,5]
	- 到2的时候，2和5，比较，变成[1,2,5],在比较1，2，变成[1,2,5]
	- 到3的是欧，3和5比较，变成[1,2,3,5],在比较3和2，变成[1,2,3,5],后面不用在比了
	- 。。。



### 数组去重排序功能

```js
	<script>
		var arr = [1,5,4,2,6,7,1,23,4,5];
	// 第一种方法
	// 去重
	var arrFilter = arr.filter(function(ele,index,arr){
		return arr.indexOf(ele) === index
	})
	// 排序
	arrFilter.sort(function(x,y){
		if(x>y){
			return 1
		}
		if(x<y) {
			return -1
		}
		return 0;
	})
	console.log(arrFilter)

	// 第二种方法
	var arr = [1,5,4,2,6,7,1,23,4,5];
	var tem = [];
	for(var i=0,len=arr.length;i<len;i++){
		if (n.indexOf(i) === -1) {
			n.push(i)
		}
	}


	// 第三种方法
	var arr = [1,5,4,2,6,7,1,23,4,5];
	var obj = {};
	var arrNew = []
	for (var i=0;i<arr.length;i++){
		if(!obj[arr[i]]){
			arrNew[i] = arr[i];
			obj[arr[i]] = 1;
		}
	}
	console.log(arrNew)
	</script>
```

### 如何找出两个数组中相同的元素

```js
	<script>
		function arrayIntersection(a, b){
			var ai = 0;
			var bi = 0;
			var result = new Array();
			while (ai < a.length && bi < b.length) {
				if (a[ai] > b[bi]) {
					ai++;
				} else if (a[ai] < b[bi]) {
					bi++;
				} else {
					result.push(a[ai]);
					ai++;
					bi++
				}
			}
			return result;
		}
	</script>
```

### 如何找出一个数组中的最大差值

```js
	<script>
		function getMaxProfit(arr){
		var minPrice = arr[0];
		var maxProfit = 0;

		for (var i =0; i<arr.length;i++){
			var currentPrice = arr[i];
			minPrice = Math.min(minPrice, currentPrice);
			var potentialProfit = currentPrice - minPrice;
			maxProfit = Math.max(maxProfit, potentialProfit);
		}

		return maxProfit;
}
	</script>
```



### 面试中的数据处理相关题
1. 字符串转化成驼峰法

```js
	<script>
		var str = 'border-bottom-color';
		function covert(str) {
			var re = /-(\w)/g;
			return str.replace(re, function($0, $1){
				console.log($1.toUpperCase())
				return $1.toUpperCase();

			})
		}
		covert(str);

		// 传统的js方式
		var str = 'border-bottom-color';
		function covertJS(str){
			var arr = str.split('-');
			for (var i = 1; i < arr.length; i++) {
				arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
			}

			return arr.join('');
		}
		covertJS(str) // borderBottomColor

		// 扩展，如何将驼峰命名的转化成用-链接的
		var str = 'borderBottomColor';
		function recovert(str){
			var re = /([A-Z])/g;
			return str.replace(re, function($0, $1){
				return '-' + $1.toLowerCase();
			})
		}
		recovert(str);


		// 扩展，封装一个函数，进行驼峰和横线链接的转化
		function covertAll(str){
			if (/-/g.test(str)){
				var re = /-(\w)/g;
				return str.replace(re, function($0, $1){
					return $1.toUpperCase();
				})
			} else {
				var re = /([A-Z])/g;
				return str.replace(re, function($0, $1){
					return '-' + $1.toLowerCase();
				})
			}
		}
		covertAll(str);
	</script>v
```
2. 给字符串加千分符

```js
	<script>
		var str = '12345678901.123';
		function splitDot(str){
			var iNow =0;
			var tmp = '';
			var num = 0;
			var arr = [];
			if(/\./g.test(str)){
				var newStr = str.substr(0,str.search(/\./g));
				var endStr = str.substr(str.search(/\./g));
			}

			var _str = newStr || str;
			num = _str.length % 3; // 0,1,2
			if (num){
				var start = _str.substr(0, num);
				arr.push(start);
				
			} 
			_str = _str.substr(num);
			for (var i = 0; i < _str.length; i++) {
				iNow++;
				tmp += _str[i];
				if (iNow == 3) {
					arr.push(tmp);
					iNow = 0;
					tmp = '';
				}
				
			}
			if (endStr) {
				_str = arr.join(',') + endStr;
			}
			return _str;
		}
		splitDot(str);
	</script>
```










