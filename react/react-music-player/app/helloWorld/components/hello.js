import React from 'react';
import './hello.less';

let Hello = React.createClass({
    render() {
        return (
            <div className = "hello-component">
							Hello world, react && webpack && awesome
						</div>
        );
    }
});

export default Hello;