import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {indigo700} from 'material-ui/styles/colors';

import RightMenu from './header/RightMenu'

export class AppHeader extends Component {
	// constructor(props) {
	// 	super(props);
	// 	//this.props = props;
	// }

	render() {
		return (
			<AppBar
				title="Material UI Приложение!"
				// iconClassNameRight="muidocs-icon-navigation-expand-more"
				style={{
					// background: 'red'
					// background : "#303f9f"
					background: indigo700
				}}
				iconElementRight={<RightMenu/>}
				onLeftIconButtonClick={() => {
					console.log('AppBar/onLeftIconButtonClick');
					this.props.onLeftIconButtonClick();
				}}
			/>
		);
	}
}