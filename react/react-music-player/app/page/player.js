import React from 'react';
import Progress from '../progress/components/progress';
import './player.less';
import { Link } from 'react-router';
import Pubsub from 'pubsub-js'



let duration = null;
let Player = React.createClass({
	/*设置初始的数据*/
	getInitialState() {
		/*返回的是一个对象*/
		return {
			progress: 0,
			volume: 0,
			leftTime: 0
		}
	},
	// 格式化时间
	format(time) {
		let times = Math.floor(time);
		let minutes = Math.floor(times / 60);
		let seconds = Math.floor(times % 60);
		seconds = seconds < 10 ? `0${seconds}` : seconds;

		return `${minutes}:${seconds}`
	},
	/*音乐软件的初始化*/
	componentDidMount() {
		/*调用了setState的方法会触发react的一个更新的生命周期*/
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
			// 设置音乐的播放时间
			duration = e.jPlayer.status.duration;
			this.setState({
				// progress: Math.round(e.jPlayer.status.currentTime)
				volume: e.jPlayer.options.volume * 100,
				progress: e.jPlayer.status.currentPercentAbsolute,
				isPlay: true,
				leftTime: this.format(duration * (1- this.state.progress / 100))
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
	changeVolumeHandler(progress) {
		$('#player').jPlayer('volume', progress)
	},
	play() {
		if (this.state.isPlay) {
			$('#player').jPlayer('pause');
		} else {
			$('#player').jPlayer('play');
		}
		this.setState({
			isPlay: !this.state.isPlay
		})
	},
	playPre(){
		Pubsub.publish('PLAY_PRE');
	},
	playNext(){
		Pubsub.publish('PLAY_NEXT');
	},
	render(){
		return (
			<div className="player-page">
        <h1 className="caption"><Link to='/list'>我的私人音乐坊 &gt;</Link></h1>
        <div className="mt20 row">
        	<div className="controll-wrapper">
        		<h2 className="music-title">{this.props.currentMusicItem.title}</h2>
        		<h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
        		<div className="row mt20">
        			<div className="left-time -col-auto">{this.state.leftTime}</div>
        			<div className="volume-container">
        				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
        				<div className="volume-wrapper">
	                <Progress
						progress={this.state.volume}
						onProgressChange={this.changeVolumeHandler}
						barColor='#aaa'
	                >
	                </Progress>
        				</div>
        			</div>
        		</div>
        		<div style={{height: 10, lineHeight: '10px'}}>
              <Progress
				progress={this.state.progress}
				onProgressChange={this.progressChangeHandle}
              >
              </Progress>
        		</div>
        		<div className="mt35 row">
        			<div>
          			<i className="icon prev"  onClick={this.playPre}></i>
          			<i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
          			<i className="icon next ml20" onClick={this.playNext}></i>
        			</div>
        			<div className="-col-auto">
        				<i className={`icon repeat-once`} onClick={this.changeRepeat}></i>
        			</div>
        		</div>
        	</div>
        	<div className="-col-auto cover">
        		<img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title}/>
        	</div>
        </div>
    </div>
		);
	}
});

export default Player