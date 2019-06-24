import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export class AppDrawer extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// this.props = props;
	// }

	render() {
		return (
			<Drawer
				docked={false}
				open={this.props.open}
				onRequestChange={this.props.onRequestChange}
			>
				<MenuItem>Главная</MenuItem>
				<MenuItem>Контакты</MenuItem>
			</Drawer>
		);
	}
}