import React from 'react';
import { render } from 'react-dom';
// 为了浏览器能实时的刷新修改
import { AppContainer } from 'react-hot-loader';
import Root from './router/root';


render(
	<AppContainer>
		<Root />
	</AppContainer>,
	document.getElementById('root')
);
// react-hot-loader 会只更新需要部分的内容

if (module.hot) {
    module.hot.accept('./router/root', () => {
        const NewRoot = require('./router/root').default;
        render(
            <AppContainer>
				<NewRoot />
			</AppContainer>,
            document.getElementById('root')
        );
    });
}