import React, {Component} from "react";
import {List, ListItem} from "material-ui/List/index";
import {Checkbox, Divider} from "material-ui";
import {ActionFavorite, ActionFavoriteBorder} from "material-ui/svg-icons/index";

export default class AppList extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// console.log('AppList/constructor/props=', props)
	// }

	render() {
		return (
			<List>
				{this.props.items.map((item, key) => {
					return (
						<div key={key}>
							<ListItem
								primaryText={item.name}
								secondaryText={item.description}
								leftCheckbox={
									<Checkbox
										checkedIcon={<ActionFavorite/>}
										uncheckedIcon={<ActionFavoriteBorder/>}
										//label="Label"
										checked={item.checked}
										// labelPosition="left"//"right"
										onCheck={(event, isInputChecked)=>{
											// console.log('onCheck', {
											// 	event : event,
											// 	isInputChecked : isInputChecked
											// });
											this.props.onCheck(isInputChecked, key);
										}}
									/>
								}
							/>
							<Divider/>
						</div>
					)
				})}
			</List>
		);
	}
}