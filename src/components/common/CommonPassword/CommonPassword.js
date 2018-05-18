import React from 'react'
import styled from 'styled-components'
import Input, { InputLabel } from 'material-ui/Input';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import { FormControl } from 'material-ui/Form';
import { blue } from '../../../constants/constants'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const CommonPassword = ({ label, id, input, span = false, children }) =>
	<Wrapper span={span}>
    <MuiThemeProvider theme={theme}>
      <FormControl>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          {...input}
          id={id}
          type='password'
          />
      </FormControl>
    </MuiThemeProvider>
	</Wrapper>

export default CommonPassword

const Wrapper = styled.div`
  margin-top: 10px;
  display: ${props => props.span ? 'inline' : 'block'};
`
