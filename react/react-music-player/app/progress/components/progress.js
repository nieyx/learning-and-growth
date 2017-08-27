import React from 'react';
import './progress.less';

let Progress = React.createClass({
	render(){
		return (
			<div className="compontents-progress row">
				{/*音乐进度条的显示*/}
				{this.props.progress}s
			</div>
		);
	}
});

export default Progress;