import React from 'react';
import { render } from 'react-dom';
// 为了浏览器能实时的刷新修改
import { AppContainer } from 'react-hot-loader';
import Hello from './components/hello/hello'

// render(
// 	<Hello></Hello>,
// 	document.getElementById('root')
// );

render(
	<AppContainer>
		<Hello />
	</AppContainer>,
	document.getElementById('root')
);
// react-hot-loader 会只更新需要部分的内容

if (module.hot) {
	module.hot.accept('./components/hello/hello', () => {
		const NewHello = require('./components/hello/hello').default;
		render(
			<AppContainer>
				<NewHello />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}