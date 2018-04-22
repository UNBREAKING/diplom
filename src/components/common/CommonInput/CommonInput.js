import React from 'react';
import TextField from 'material-ui/TextField';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import PropTypes from 'prop-types'

const blue = {
  50: '#003F61',
  100: '#003F61',
  200: '#003F61',
  300: '#003F61',
  400: '#003F61',
  500: '#003F61',
  600: '#003F61',
  700: '#003F61',
  800: '#003F61',
  900: '#003F61',
  A100: '#003F61',
  A200: '#003F61',
  A400: '#003F61',
  A700: '#003F61'
};


const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});


const CommonInput = ({ label, classes }) =>
	<div>
		<MuiThemeProvider theme={theme}>
			<TextField
				label={label} />
		</MuiThemeProvider>
	</div>

CommonInput.propTypes = {
	classes: PropTypes.shape({}),
	label: PropTypes.string
}

export default CommonInput