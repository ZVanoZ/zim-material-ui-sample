import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {SvgIcon} from "material-ui";

// Урок5. IconContacts и IconContactMail - это SVG-иконки, данные для отрисовки которых импортируются из "material-ui".
import IconContacts from "material-ui/svg-icons/communication/contacts"
import IconContactMail from "material-ui/svg-icons/communication/contact-mail"

// Урок6. Font иконки. Импортируем компонент для использования иконок из шрифтов.
import FontIcon from "material-ui/FontIcon";

import {blue700, pink700, yellow500} from "material-ui/styles/colors";

// Урок5. HomeIcon - это SVG-иконка, данные для отрисовки которой вшиты в код.
const HomeIcon = (props) => (
	<SvgIcon {...props}>
		<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
	</SvgIcon>
);

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
				<MenuItem
					leftIcon={
						<HomeIcon
							color={blue700}
							hoverColor={pink700}
						/>
					}
				>Главная</MenuItem>
				<MenuItem
					leftIcon={
						<IconContacts
							color={blue700}
							hoverColor={pink700}
						/>
					}
				>Контакты</MenuItem>
				<MenuItem
					leftIcon={
						<IconContactMail
							color={blue700}
							hoverColor={pink700}
						/>
					}
				>Электронная почта</MenuItem>

				<MenuItem
					rightIcon={
						<FontIcon
							className="material-icons"
							color={blue700}
							hoverColor={pink700}
						>help</FontIcon>
					}
				>О нас</MenuItem>
				<MenuItem
					rightIcon={
						<FontIcon
							className="material-icons"
							color={blue700}
							hoverColor={pink700}
						>settings_phone</FontIcon>
					}
				>Позвонить нам</MenuItem>
			</Drawer>
		);
	}
}