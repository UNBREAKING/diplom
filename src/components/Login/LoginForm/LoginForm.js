import React from 'react'
import styled, { css } from 'styled-components'
import { CommonInput, BlueButton, CommonPassword } from '../../common'
import { Field } from 'redux-form'

const LoginForm = ({ signin }) =>
  <Wrapper>
    <form>
      <Cell>
      <Field name="login" label="Login" component={CommonInput} />
      <Field name="password" id="password" label="Password" component={CommonPassword} />
      </Cell>
      <Cell right>
        <BlueButton text="Sign In" onClick={signin}/>
      </Cell>
    </form>
  </Wrapper>

export default LoginForm

const Wrapper = styled.div`
  width: 92%;
  display: table;
  padding: 20px 20px;
  border-bottom: 1px solid black;
`

const Cell = styled.div`
  display: table-cell;
  width: 50%;
  ${ props => props.right && css`
    text-align: center;
    vertical-align: middle;
  `}

`