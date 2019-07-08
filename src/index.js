import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import {darkBaseTheme, getMuiTheme, lightBaseTheme} from "material-ui/styles/index";
import getMuiTheme from "material-ui/styles/getMuiTheme"
import selectedTheme from "material-ui/styles/baseThemes/lightBaseTheme"

ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme(selectedTheme)}>
		<App/>
	</MuiThemeProvider>
	,
	document.getElementById('root')
);
