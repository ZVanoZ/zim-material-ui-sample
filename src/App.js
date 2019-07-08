import React, {Component} from 'react';

import {AppHeader} from './components/header';
import {AppDrawer} from "./components/drawer";
import {AppButtons} from "./components/buttons";
import AppList from "./components/list";

export default class App extends Component {
	state = {
		isDrawerOpen: false,
		itemsList: [
			{name: 'Элемент 1', description: 'Сложное описание 1', checked: false},
			{name: 'Элемент 2', description: 'Сложное описание 2', checked: false},
			{name: 'Элемент 3', description: 'Сложное описание 3', checked: false},
			{name: 'Элемент 4', description: 'Сложное описание 4', checked: false}
		]
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
					<AppList
						items={this.state.itemsList}
					/>
				</div>
			</div>
		);
	}
}
