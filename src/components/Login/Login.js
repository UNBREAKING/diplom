import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { WhiteButton, ModalWindow } from '../common'
import LoginForm from './LoginForm'
import LoginButtons from './LoginButtons'

const Login = ({ openSignInModal, visibleModal, closeSignInModal }) =>
  <Fragment>
    <WhiteButton
      onClick={() => openSignInModal()}
      text="Sign In" />
    {
      visibleModal && 
      <ModalWindow
        width="480"
        header="Sign In"
        closeHandler={() => closeSignInModal()}>
        <LoginForm />
        <LoginButtons />
      </ModalWindow>
    }
  </Fragment>

Login.propTypes = {
  closeSignInModal: PropTypes.func,
  openSignInModal: PropTypes.func,
  visibleModal: PropTypes.bool
}

export default Login