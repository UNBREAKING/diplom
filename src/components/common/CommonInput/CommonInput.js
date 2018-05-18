import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import { blue } from '../../../constants/constants'

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
  margin-top: 10px;
  display: ${props => props.span ? 'inline' : 'block'};
`