import React from 'react';
import Header from '../header/components/header'
// import Progress from '../progress/components/progress'
import Player from '../page/player.js'

// 设置音频的总时间
let duration = null;
let Root = React.createClass({
	/*设置初始的数据*/
	getInitialState() {
		/*返回的是一个对象*/
		return {
		// 	progress: 0
		}
	},
	/*音乐软件的初始化*/
	componentDidMount() {
		$("#player").jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
				}).jPlayer('play');
			},
			supplied: "mp3",
			wmode: "window",
		});
		/*调用了setState的方法会触发react的一个更新的生命周期*/
		// $("#player").bind($.jPlayer.event.timeupdate, (e) => {
		// 	// 设置音乐的播放时间
		// 	duration = e.jPlayer.status.duration;
		// 	this.setState({
		// 		// progress: Math.round(e.jPlayer.status.currentTime)
		// 		progress: e.jPlayer.status.currentPercentAbsolute
		// 	});
		// });
	},
	// 对事件解绑,避免页面切换时，重新绑定
	componentWillUnMount() {
		// $("#player").unbind($.jPlayer.event.timeupdate)
	},
	progressChangeHandle(progress) {
		// 获取当前音频的总时间后进行移动进度条的操作
		// $('#player').jPlayer('play', duration * progress)
	},

	render(){
		return (
			<div>
				<Header />
				<Player></Player>
			</div>
		);
	}
});

export default Root;