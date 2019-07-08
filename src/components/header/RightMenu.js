import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {grey50} from 'material-ui/styles/colors';


const RightMenu = (props) => (
	<IconMenu
		{...props}
		iconButtonElement={
			<IconButton>
				<MoreVertIcon color={grey50}/>
			</IconButton>
		}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		<MenuItem primaryText="Обновить"/>
		<MenuItem primaryText="Помощь"/>
		<MenuItem primaryText="Выйти"/>
	</IconMenu>
);

export default RightMenu;