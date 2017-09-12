window.onload = function (argument) {
	var wrap = document.querySelector('.wrap');
	var list = document.querySelector('.list');
	var a = document.querySelectorAll('a');

	var disX = 0;
	var listL = 0;
	var num = 0;
	var w = wrap.clientWidth;
console.log('wrap的宽度', w)
	list.addEventListener('touchstart', function(ev){
		var e = ev.changedTouches[0];
		console.log('start');
		disX = e.pageX;
		listL = this.offsetLeft;
		console.log('start', disX, listL);
	});

	list.addEventListener('touchmove', function(ev){
		var e = ev.changedTouches[0];
		console.log('move');
		// console.log('move',e.pageX, list.offsetLeft,e.pageX - disX);
		list.style.left = (e.pageX - disX) + listL + 'px';
		console.log(e.pageX, e.pageX-disX, list.style.left)

	});

	list.addEventListener('touchend', function(ev){
		// var e = ev.changedTouches[0];
		// console.log('end');
		// console.log('end', e.pageX)
		// num = Math.round(list.offsetLeft / w);
		// list.style.transition = null;
		// list.style.left = num * w + 'px';
		// console.log(num,list.offsetLeft, w)

	});
};