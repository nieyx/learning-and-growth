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
```

### push／pop
```js
	var arr = [1,5,2,4,3];
	// push
	console.log(arr.push(5)); // 返回数组的长度 6
	// pop
	console.log(arr.pop()); // 返回删除的数组的最后一项 5
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
