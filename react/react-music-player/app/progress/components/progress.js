import React from 'react';
import './progress.less';

let Progress = React.createClass({
	// 设置默认的进度条的颜色
	getDefaultProps() {
		return {
			baColor: '#FF6F6F'
		}
	},

	changeProgress(e){
		 // 获取对应的进度条dom，进行操作
		 let progressBar = this.refs.progressBar;
		 let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
		 // 给父组件传递progress的值
		 this.props.onProgressChange && this.props.onProgressChange(progress);
	},

	render(){
		return (
			// ref 用来操作真是的dom节点
			<div className="components-progress row" ref="progressBar" onClick={this.changeProgress}>
				<div className="progress" style={{width: `${this.props.progress}%`,background:this.props.baColor}}>
					{/*音乐进度条的显示 // {this.props.progress}s*/}
				</div>
			</div>
		);
	}
});

export default Progress;