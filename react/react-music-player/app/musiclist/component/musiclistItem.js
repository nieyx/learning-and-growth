import React from 'react';
import './musiclistItem.less';
// 对每一个li中的设置结构单独提出来
let MusiclistItem = React.createClass({
	render() {
		let musicItem = this.props.musicItem;
		return (
			<li className={`components-listitem row ${this.props.focus ? 'focus' : ''}`}>
				<p><strong>{musicItem.title}</strong>-{musicItem.artist}</p>
				<p className="-col-auto delete"></p>
			</li>
		)
	}
});

export default MusiclistItem;