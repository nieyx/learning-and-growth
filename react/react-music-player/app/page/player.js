import React from 'react';
import Progress from '../progress/components/progress'

let duration = null;
let Player = React.createClass({
	/*设置初始的数据*/
	getInitialState() {
		/*返回的是一个对象*/
		return {
			progress: 0
		}
	},
	/*音乐软件的初始化*/
	componentDidMount() {
		/*调用了setState的方法会触发react的一个更新的生命周期*/
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
			// 设置音乐的播放时间
			duration = e.jPlayer.status.duration;
			this.setState({
				// progress: Math.round(e.jPlayer.status.currentTime)
				progress: e.jPlayer.status.currentPercentAbsolute
			});
		});
	},
	// 对事件解绑,避免页面切换时，重新绑定
	componentWillUnMount() {
		$("#player").unbind($.jPlayer.event.timeupdate)
	},
	progressChangeHandle(progress) {
		// 获取当前音频的总时间后进行移动进度条的操作
		$('#player').jPlayer('play', duration * progress)
	},

	render(){
		return (
			<div>
				<Progress progress={this.state.progress} onProgressChange={this.progressChangeHandle} baColor='#ff0'></Progress>
			</div>
		);
	}
});

export default Player