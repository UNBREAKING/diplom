import React from 'react'
import styled from 'styled-components'

const Login = ({ openSignInModal }) =>
  <Button onClick={ () => openSignInModal() }>
    Sign Up
  </Button>

const Button = styled.button`
background: white;
color: #003F61;
font-size: 20px;
font-family: 'Roboto Light';
padding: 10px 30px;
border: 1px solid #A6A6A6;
border-radius: 2px;
cursor: pointer;
:hover {
    background: #F0F0F0;
}
`
export default Login