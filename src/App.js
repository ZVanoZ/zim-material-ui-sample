import React, {Component} from 'react';

import {AppHeader} from './components/header';
import {AppDrawer} from "./components/drawer";
import {AppButtons} from "./components/buttons";

export default class App extends Component {
	state = {
		isDrawerOpen: false
	};

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		isDrawerOpen: false
	// 	};
	// }

	render() {
		return (
			<div>
				<AppHeader onLeftIconButtonClick={() => {
					console.log('AppHeader/onLeftIconButtonClick');
					this.setState({
						isDrawerOpen: !this.state.isDrawerOpen
					})
				}}/>
				<AppDrawer
					open={this.state.isDrawerOpen}
					onRequestChange={() => {
						console.log('AppDrawer/onRequestChange');
						this.setState({
							isDrawerOpen: !this.state.isDrawerOpen
						})
					}}
				/>
				<div className="container">
					<AppButtons/>
				</div>
			</div>
		);
	}
}
