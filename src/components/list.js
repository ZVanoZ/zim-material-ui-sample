import React, {Component} from "react";
import {List, ListItem} from "material-ui/List/index";
import {Divider} from "material-ui";

export default class AppList extends Component {
	constructor(props) {
		super(props);
		// console.log('AppList/constructor/props=', props)
	}

	render() {
		return (
			<List>
				{this.props.items.map((item, key) => {
					return (
						<div key={key}>
							<ListItem
								primaryText={item.name}
								secondaryText={item.description}
							/>
							<Divider/>
						</div>
					)
				})}
			</List>
		);
	}
}