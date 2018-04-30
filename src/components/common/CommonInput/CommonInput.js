import React from 'react'
import styled from 'styled-components'
import TextField from 'material-ui/TextField'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
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


const CommonInput = ({ label, input, span = false }) =>
	<Wrapper span={span}>
		<MuiThemeProvider theme={theme}>
			<TextField
        { ...input}
				label={label} />
		</MuiThemeProvider>
	</Wrapper>

CommonInput.propTypes = {
	label: PropTypes.string
}

export default CommonInput

const Wrapper = styled.div`
 display: ${props => props.span ? 'inline' : 'block'};
`