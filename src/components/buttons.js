import React, {Component} from "react";

import RaisedButton from "material-ui/RaisedButton"
import {blue700, deepOrange500, red300} from "material-ui/styles/colors";
import {FloatingActionButton, FontIcon} from "material-ui";

const styles = {
	marginRight: 20
};

export class AppButtons extends Component {
	state = {};

	constructor(props) {
		super(props);
		// this.props = props;
		this.state.label1 = "Default (label)";
	}

	render() {
		return (
			<div style={{marginBottom: 40}}>
				<RaisedButton
					//label="Default"
					label={this.state.label1}
					style={styles}
					onClick={() => {
						console.log('click/Default');
					}}
				/>
				<RaisedButton
					label="Primary"
					primary={true}
					style={styles}
					onClick={() => {
						console.log('click/Primary');
					}}
				/>
				<RaisedButton
					label="Secondary"
					secondary={true}
					style={styles}
					onClick={() => {
						console.log('click/Secondary');
					}}
				/>
				<RaisedButton
					label="Поиск в google"
					href="https://google.com"
					target="_blank"
					style={styles}
					backgroundColor={red300}
					labelColor={blue700}
					icon={<FontIcon className="material-icons">search</FontIcon>}
				/>
				<FloatingActionButton
					href="https://google.com"
					target="_blank"
					backgroundColor={deepOrange500}
					style={{
						position: 'fixed',
						right: "10%",
						bottom: "10%"
					}}
				>
					<div>google2</div>
				</FloatingActionButton>
			</div>
		);
	}
};