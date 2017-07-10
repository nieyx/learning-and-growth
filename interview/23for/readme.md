## js中的for循环

### for 
> 循环
```js
	var arr = ['qaz','wsx','edc','rfv'];
	for (var i=0,len=arr.length;i<len;i++) {
		console.log(i)
		console.log(arr[i])
		console.log(typeof i,typeof arr[i]) // number string
	}
```
### for in
> 用来循环数组或者对象的属性,循环中得到的i是字符串，而不是数字

```js
	var arr = ['qaz','wsx','edc','rfv'];
	for (var i in arr) {
		console.log(i)
		console.log(arr[i])
		console.log(typeof i,typeof arr[i]) // string string
	}
```


### for of
> 
```js
	var arr = ['qaz','wsx','edc','rfv'];
	for (var i of arr) {
		console.log(i) // 直接获取属性值
		console.log(typeof i) // string
	}
```

### forEach
> 
```js
	
```
