import React, {Component} from 'react';

import {AppHeader} from './components/header';
import {AppDrawer} from "./components/drawer";
import {AppButtons} from "./components/buttons";
import AppList from "./components/list";
import Popover from "material-ui/Popover";
import {AppForm} from "./components/form";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";

export default class App extends Component {
	state = {
		isDrawerOpen: false,
		isPopoverOpen: false,
		isModalOpen: false,
		popoverElement: null,
		itemsList: [
			{name: 'Элемент 1', description: 'Сложное описание 1', checked: false},
			{name: 'Элемент 2', description: 'Сложное описание 2', checked: false},
			{name: 'Элемент 3', description: 'Сложное описание 3', checked: true},
			{name: 'Элемент 4', description: 'Сложное описание 4', checked: false}
		]
	};

	onAdd(item) {
		console.log('App/onAdd');
		let itemsList = this.state.itemsList;
		itemsList.push(item);
		this.setState({
			itemsList: itemsList,
			isPopoverOpen: false
		});
	}

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
					<AppButtons
						itemsChecked={this.state.itemsList.map((item) => {
							return item.checked;
						}).filter((i) => {
							return i;
						})}
						onDelete={() => {
							let items = this.state.itemsList.filter((item) => {
								return !item.checked;
							});
							this.setState({
								itemsList: items
							})
						}}
						onAdd={(popoverElement) => {
							// console.log('AppButtons/onAdd');
							this.setState({
								popoverElement: popoverElement,
								isPopoverOpen: true
							});
						}}
						openModal={() => {
							this.setState({
								isModalOpen: true
							});
						}}
					/>
					<Popover
						open={this.state.isPopoverOpen}
						anchorEl={this.state.popoverElement}
						anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
						targetOrigin={{horizontal: 'left', vertical: 'top'}}
						style={{
							width: 300,
							padding: '15px 30px'
						}}
						onRequestClose={() => {
							// console.log('Popover/onRequestClose');
							this.setState({
								isPopoverOpen: false,
								popoverElement: null
							});
						}}
					>
						<AppForm
							onAdd={(data) => {
								console.log('AppForm/onAdd');
								this.onAdd(data);
							}}
						/>
					</Popover>
					<AppList
						items={this.state.itemsList}
						onCheck={(checked, index) => {
							let {itemsList} = this.state;
							itemsList[index].checked = checked;
							this.setState({
								itemsList: itemsList
							});
						}}
					/>
				</div>
				<Dialog
					actions={[
						<RaisedButton
							label='Окей!'
							primary={true}
							onClick={()=>{
								console.log('App/Dialog/buttonClose/click');
								this.setState({
									isModalOpen: false
								});
							}}
						/>
					]}
					title='Выберите дату!'
					modal={false}
					open={this.state.isModalOpen}
					onRequestClose={() => {
						console.log('App/Dialog/onRequestClose');
						this.setState({
							isModalOpen: false
						});
					}}
				>
					Я крутое модальное окно!
				</Dialog>
			</div>
		);
	}

}
