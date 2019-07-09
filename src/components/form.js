import React from 'react';
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

export class AppForm extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div>
				<TextField
					hintText="Название"
					floatingLabelText="Введите название"
					fullWidth={true}
				/>
				<TextField
					hintText="Описание"
					floatingLabelText="Введите описание"
					fullWidth={true}
					errorText="Ошибка"
				/>
				<FlatButton
					label="Добавить"
					secondary={true}
				/>
			</div>
		);
	}
}