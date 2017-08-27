import React from 'react';
import './progress.less';

let Progress = React.createClass({
	render(){
		return (
			<div className="components-progress row">
				<div className="progress" style={{width: `${this.props.progress}%`}}>
					{/*音乐进度条的显示 // {this.props.progress}s*/}
				</div>
			</div>
		);
	}
});

export default Progress;