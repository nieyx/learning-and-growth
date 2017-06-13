import './src/css/common.css'
import layer from './src/components/layer/layer.js'

const App = function(){
	var dom = document.getElementById('app');
	
	dom.innerHTML = layer().tpl;
}

new App();