## 基本数据类型

+ 基本数据类型
	- string
	- boolean
	- number
	- undefined
	- null
+ 复杂数据类型
	- object
+ 判断数据类型的方法
	- typeof
		```js
			// 基本数据类型
			typeof undefined; // undefined
			typeof '123'; // string
			typeof 123; // number
			typeof true; // bollean
			typeof {}; // object
			typeof []; // object
			typeof null; // object

		```
	- toString.call()
		* 对于{},[],null等，通过typeof只可以判断出是object，无法在详细分析
		* 使用toString.call()
		```js
			toString.call(123); // "[object Number]"
			toString.call('123'); // "[object string]"
			toString.call(true); // "[object boolean]"
			toString.call(undefined); // "[object undefined]"
			toString.call([]); // "[object array]"
			toString.call({}); // "[object object]"
			toString.call(null); // "[object null]"
		```
	- instanceOf
		```js
			[] instanceof Array // true
		```
	- constructor
		```js
			[].constructor === Array // true
		```
	- jquery中内置的方法
		```js
			jQuery.isArray(); 
		```
