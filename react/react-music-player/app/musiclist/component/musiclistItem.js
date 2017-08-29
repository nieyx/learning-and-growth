import React from 'react';
import './musiclistItem.less';
import Pubsub from 'pubsub-js';
// 对每一个li中的设置结构单独提出来
let MusiclistItem = React.createClass({
	playMusic(music) {
		Pubsub.publish('PLAY_MUSIC', music);
	},
	deleteMusic(music, event) {
		event.stopPropagation();
		Pubsub.publish('DELETE_MUSIC', music);
	},
	render() {
		let musicItem = this.props.musicItem;
		return (
			<li onClick={this.playMusic.bind(this, musicItem)} className={`components-listitem row ${this.props.focus ? 'focus' : ''}`}>
				<p><strong>{musicItem.title}</strong>-{musicItem.artist}</p>
				<p onClick={this.deleteMusic.bind(this, musicItem)} className="-col-auto delete"></p>
			</li>
		)
	}
});

export default MusiclistItem;