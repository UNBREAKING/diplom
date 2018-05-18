import React from 'react'
import styled from 'styled-components'
import Select from 'material-ui/Select'
import { InputLabel } from 'material-ui/Input';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import { FormControl } from 'material-ui/Form';
import { blue } from '../../../constants/constants'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});


const CommonSelect = ({ label, id, input, span = false, children }) =>
	<Wrapper span={span}>
    <MuiThemeProvider theme={theme}>
      <FormControl>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          native
          {...input}
          inputProps={{
            id
          }}>
          {children}
        </Select>
      </FormControl>
    </MuiThemeProvider>
	</Wrapper>

export default CommonSelect

const Wrapper = styled.div`
  margin-top: 10px;
  display: ${props => props.span ? 'inline' : 'block'};
`
