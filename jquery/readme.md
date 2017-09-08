## jquery


### jquery中on，deletage，bind的区别
1. bind给所有匹配的元素都绑定一次事件，性能差，不能监听动态添加的元素
2. delegate，事件处理函数绑定在指定的根元素上的#root，只绑定一次事件处理函数，处理的快性能好，动态添加的元素，也可以被监测到事件
3. on： bind和delegate都是居于on来实现的
```js
	bind: function( types, data, fn ) {
    return this.on( types, null, data, fn );
	}
	unbind: function( types, fn ) {
	    return this.off( types, null, fn );
	}

	live: function( types, data, fn ) {
	    jQuery( this.context ).on( types, this.selector, data, fn );
	    return this;
	}
	die: function( types, fn ) {
	    jQuery( this.context ).off( types, this.selector || "**", fn );
	    return this;
	}

	delegate: function( selector, types, data, fn ) {
	    return this.on( types, selector, data, fn );
	}
	undelegate: function( selector, types, fn ) {
	    return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
```