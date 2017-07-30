function function clickIt(e){
	window.alert('button is clicked');
}

var btn = document.getElementById('button');
btn.addEventListener('click',clickIt)