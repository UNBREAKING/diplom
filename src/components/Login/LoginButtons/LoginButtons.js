import React from 'react'
import styled, { css } from 'styled-components'
import { BlueButton } from '../../common'

const LoginButtons = ({ goToRegistration, openModal }) =>
  <Wrapper>
    <Cell>
    <BlueButton onClick={ goToRegistration } text="Registration" />
    </Cell>
    <Cell right>
    <BlueButton text="Forgot Password ?" onClick={openModal}/>
    </Cell>
  </Wrapper>

export default LoginButtons

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
`

const Cell = styled.span`
  ${props => props.right && css`
    margin-left: 20px;
  `}
`