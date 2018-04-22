import React from 'react'
import styled, { css } from 'styled-components'
import { CommonInput, BlueButton } from '../common'

const LoginForm = () =>
  <Wrapper>
    <Cell>
      <CommonInput label="Login" />
      <CommonInput label="Password" />
    </Cell>
    <Cell right>
      <BlueButton text="Sign In" />
    </Cell>
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