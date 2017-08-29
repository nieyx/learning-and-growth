import React from 'react';
import Header from '../header/components/header';
// import Progress from '../progress/components/progress'
import Player from '../page/player.js';
import Musiclist from '../page/musiclist.js';
import { MUSIC_LIST } from '../config/config';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory} from 'react-router';
import Pubsub from 'pubsub-js'

// 设置音频的总时间
let duration = null;
let App = React.createClass({
	/*设置初始的数据*/
	getInitialState() {
		/*返回的是一个对象*/
		return {
			currentMusicItem: MUSIC_LIST[0],
			musiclist: MUSIC_LIST

		}
	},

	// 
	findMusicIndex(musicItem) {
		return this.state.musiclist.indexOf(musicItem);
	},
	playMusic(musicItem) {
		$('#player').jPlayer('setMedia', {
			mp3: musicItem.file
		}).jPlayer('play');
		this.setState({
			currentMusicItem: musicItem
		})
	},

	// 播放下一首歌曲
	playNext(type = "next"){
		// 	定义一写变量
		let index = this.findMusicIndex(this.state.currentMusicItem);
		let newIndex = null;
		let musicListlength = this.state.musiclist.length;
		if (type === 'next') {
			newIndex = (index + 1) % musicListlength;
		} else {
			newIndex = (index - 1 +  musicListlength) % musicListlength;
		}
		this.playMusic(this.state.musiclist[newIndex]);
	},
	/*音乐软件的初始化*/
	componentDidMount() {
		$("#player").jPlayer({
			// ready: function () {
				// 在点击列表页中的某一个时候，进行播放，要把播放的逻辑单独抽出来
				// $(this).jPlayer("setMedia", {
				// 	mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
				// }).jPlayer('play');

			// },
			supplied: "mp3",
			wmode: "window",
		});
		// 调用方法来播放音乐
		this.playMusic(this.state.currentMusicItem);

		// 当当前的音乐播放完成，那就播放他的下一首歌曲，调用jPlayer的方法
		$('#player').bind($.jPlayer.event.ended, (e)=>{
			this.playNext(this.state.currentMusicItem);
		})
		/*调用了setState的方法会触发react的一个更新的生命周期*/
		// $("#player").bind($.jPlayer.event.timeupdate, (e) => {
		// 	// 设置音乐的播放时间
		// 	duration = e.jPlayer.status.duration;
		// 	this.setState({
		// 		// progress: Math.round(e.jPlayer.status.currentTime)
		// 		progress: e.jPlayer.status.currentPercentAbsolute
		// 	});
		// });

		// 监听子组件传递过来的点击删除信息
		Pubsub.subscribe('DELETE_MUSIC', (msg, item) => {
			this.setState({
				musiclist: this.state.musiclist.filter((music) => {
					return music !== item;
				})
		  });
		});

		Pubsub.subscribe('PLAY_MUSIC',(msg, musicItem) => {
			this.playMusic(musicItem);
		});

		Pubsub.subscribe('PLAY_PRE', (msg, musicItem) => {
			this.playNext();
		});

		Pubsub.subscribe('PLAY_NEXT', (msg, musicItem) => {
			this.playNext('next');
		});

	},
	// 对事件解绑,避免页面切换时，重新绑定
	componentWillUnMount() {
		// $("#player").unbind($.jPlayer.event.timeupdate)
		// 对订阅事件传递解绑
		Pubsub.unsubscribe("DELETE_MUSIC");
		Pubsub.unsubscribe("PLAY_MUSIC");
		Pubsub.unsubscribe("PLAY_PRE");
		Pubsub.unsubscribe("PLAY_NEXT");
		$('#player').unbind($.jPlayer.event.ended)

	},
	progressChangeHandle(progress) {
		// 获取当前音频的总时间后进行移动进度条的操作
		// $('#player').jPlayer('play', duration * progress)
	},

	render(){
		// 对路由下的子组件进行状态址的传递，路由中是无法直接传递状态值，要用刀this.props.children和React.cloneElement 的方法，
		// react.cloneElement 传入两个参数，要克隆的组件，要传递的参数，react.cloneElement 会将传递的状态值进行变量，然后依此的添加到对应的组件上
		/*<Musiclist 
					currentMusicItem={this.state.currentMusicItem}
					musiclist={this.state.musiclist}
					>
				</Musiclist>*/
				
		return (
			<div>
				<Header />
				{
					React.cloneElement(this.props.children, this.state)
				}
			</div>
		);
	}
});
let Root = React.createClass({
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={App}>
					<IndexRoute  component={Player} />
					<Route path='/list' component={Musiclist} />
				</Route>
			</Router>
		);
	}
});

export default Root;