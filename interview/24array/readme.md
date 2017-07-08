## Array 的方法

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
	var arr = [1,5,2,4,3];
	console.log(arr.splice(2,2)) // [1,5,3]
	console.log(arr.splice(2,2,0,0,0)) // 
	console.log(arr.splice(2)) //
```
