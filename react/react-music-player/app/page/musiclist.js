import React from 'react';
import MusiclistItem from '../musiclist/component/musiclistItem';

let Musiclist = React.createClass({
	render() {
		let listEle = null;
		listEle = this.props.musiclist.map((item)=>{
			return (
				<MusiclistItem 
					focus = {item === this.props.currentMusicItem}
					musicItem={item}
					key={item.id}>
				</MusiclistItem>
			)
		});

		return (
			<ul>
				{ listEle }
			</ul>
		)
	}
});

export default Musiclist;