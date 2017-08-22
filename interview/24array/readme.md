## Array 的方法
> 1.slice
>
> 2.push/pop
>
> 3.unshift/shift
>
> 4.splice
>
> 5.join
>
> 6.concat
>
> 7.sort
>
> 8.reverse
>
> 9.indexOf
### slice

```js
	var arr = [1,5,2,4,3];
	// slice 
	console.log(arr.slice(2)) // 从数字开始到结束 [2,4,3]
	console.log(arr.slice(0,2)) // 输出截取的数组[1,5]
	console.log(arr) // [1,5,2,4,3]
```

### push／pop
```js
	var arr = [1,5,2,4,3];
	// push
	console.log(arr.push(5)); // 返回数组的长度 6
	// pop
	console.log(arr.pop()); // 返回删除的数组的最后一项 5
	console.log(arr) //[1,5,2,4,3]
```

### unshift/shift

```js
	var arr = [1,5,2,4,3];
	// unshift
	console.log(arr.unshift(1)) // 返回数组的长度 6
	// shift
	console.log(arr.shift()) // 返回删除的数组的元素 1
```

### indexOf
```js
	var arr = [1,5,2,4,3];
	console.log(arr.indexOf(5)) // 返回数组的位置 1
	console.log(arr.indexOf(0)) // 没有则返回-1
```

### splice 
```js
	var arr = [1,2,3,4,5,6,7];
	// 只删除，不添加，返回查处元素
	console.log(arr.splice(2,2),'splice') // [3,4]
	console.log(arr) // [1,2,5,6,7]
	// 删除并添加
	console.log(arr.splice(2,2,1,1,1),'splice') // [5,6]
	console.log(arr) // [1,2,1,1,1,7]
	// 只有一个参数，就是从开始位置，一直到数组结尾
	console.log(arr.splice(2),'splice') // [1,1,1,7]
	console.log(arr) // [1,2]
```

### join 
```js
	var arr = [1,5,2,4,3];
	console.log(toString.call(arr)) // [object, array]
	console.log(arr.join('-')); // "1-5-2-4-3"
	console.log(typeof arr.join(',')) // string
	var string = arr.join('-');
	console.log(string.split('-')) // [1,5,2,4,3]
```

### concat
> 链接后返回新的数组，不改变原数组
```js
	var arr1 = [1,5,2,4,3];
	var arr2 = [1,2,3];
	console.log(arr1.concat(arr2)); // [1,5,2,4,3,1,2,3]
	console.log(arr1); // [1,5,2,4,3]
	console.log(arr2); // [1,2,3]
```

### sort
```js
	var arr = [1,5,2,4,3,10];
	arr.sort(); // [1,10,5,2,4,3]
```

### reverse
```js
	var arr = [1,5,2,4,3];
	arr.recerse() // [3,4,2,5,1]
```


## String的方法
> 1.获取类
>
> charAt();
>
> charCodeAt();
>
> fromCharCode();
>
> 2. 查找类
>
> indexOf()
>
> lastIndexOf()
>
> search()
>
> match()
>
> 3.截取类
>
> substr
>
> slice
>
> substring
>
> 4. 其他
> 
> replace()
> 
> split()
> 
> toLowerCase()
> 
> toUpperCase

```js
	<!-- charAt 返回指定值的位置-->
	var str = 'abcdefgh';
	console.log(str.charAt('d'),typeof str,str) //  3, string,'abcdefgh'
	<!-- charCodeAt 返回指定值的unicode编码 -->
	console.log(str.charCodeAt('a'),typeof str, str) // 97,string,'abcdefgh'
	<!-- formCharCode() 将制定的unicode值合成一个字符串 -->
	console.log(String.fromCharCode(97,98,99),typeof String.fromCharCode(97,98,99)) // 'abc' string
	<!-- indexOf 找到指定值的位置，没有则返回-1，有则返回当前的索引值 -->
	console.log(str.indexOf('a')) // 0
	<!-- lastIndexOfindexOf的反向 -->
	console.log(str.lastIndexOf('a')) // 7
	<!-- match 匹配指定值 -->
	console.log(str.match('a')) // ['a', index:0,input:'abcdefgh']
	<!-- search 搜索指定值的位置 -->
	console.log(str.search('b')) // 1
	<!-- substr -->
	console.log(str.substr(1,3)) // bcd
	<!-- substring -->
	console.log(str.substring(1,3)) // bc
	<!-- slice-->
	console.log(str.slice(1,3)) // bc
	<!-- 截取字符串的 三种方式的差别，substr是开始位置 + length，substring和slice是开始位置和结束位置，slice和substring不同的是，slice支持负值-->

```
