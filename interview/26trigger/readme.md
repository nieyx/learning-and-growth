## jquery中的自定义事件
文档地址[https://www.zfanw.com/blog/jquery-custom-event.html]

+ 在jQuery中，绑定事件用on或者bind
```js
	$('#p').on('click', function(){
		// some code here
	})
```

+ 除了click之外，还有dbclick，blur，change等，但是有些语义不明，不知道click表示了什么
+ click表示点击了一个元素，但是点击之后引发了什么结果，需要自己定义

+ 案例
	- 一个输入框，一个按钮，用于提交用户名给服务器
	- 假设，有三种情况，用户名为空，用户提交的用户名不存在，用户提交的用户名存在

```html
	<input type='text' value='' id='username'>
	<input type='button' value='提交' class='js-submit'>
	<script>
		$('.js-submit').on('click', function() {
		  var username = $('#username').val();
		  username = $.trim(username); // 去除空格
		  if (username === '') {
		    console.log('请不要留空');
		  }
		  $.post(url, {username: username}, function(data) {
		    var res = data;
		    if (res.retcode === -1) {
		      console.log('用户名不存在');
		    } else if (res.retcode === 0) {
		      console.log('用户名存在');
		    }
		  });
		});
		// 上诉代码没有问题，但是当情况变得更为复杂之后，上面的写法变的很不清晰
		// 改进如下
		$('.js-submit').on('click', function() {
		  var username = $('#username').val();
		  username = $.trim(username);
		  if (username === '') {
		    $(document).trigger('blank.username'); // 如果 username 为空值，则触发 blank.username 事件
		  }
		  $.post(url, {username: username}, function(data) {
		    var res = data;
		    if (res.retcode === -1) {
		      $(document).trigger('notExist.username'); // 如果用户不存在，则触发 notExist.username 事件
		    } else if (res.retcode === 0) {
		      $(document).trigger('success.username'); // 如果用户存在，则触发 sucess.username 事件
		    }
		  });
		});

		//定义自定义事件
		$(document).on('blank.username', function() {
		  console.log('请不要留空');
		});
		$(document).on('notExist.username', function() {
		  console.log('用户名不存在');
		});
		$(document).on('success.username', function() {
		  console.log('用户名存在');
		});
	</script>

```

### 绑定自定义事件
+ $(document).trigger('事件名');
+ $(document).on('事件名'， function(){要执行的函数})