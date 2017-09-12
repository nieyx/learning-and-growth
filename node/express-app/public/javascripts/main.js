(function(){
	// document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 15 + 'px';
	document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 15 + 'px';
	console.log(window.innerWidth, '屏幕的宽度')
})();
// 目的是为了兼容在ios以上，用户缩放，回弹，默认滚动条的功能
document.addEventListener('touchstart', function(e){
	e.preventDefault();
});

// 查看event对象的touches的信息

// if (document.getElementById('con')){
// 	var con = document.getElementById('con');
// 	console.log(con);
// 	con.addEventListener('touchstart', function(e){
// 		console.log(e.touches);
// 		this.innerHTML = e.touches.length;
// 	});
// }
