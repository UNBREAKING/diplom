import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { WhiteButton, ModalWindow } from '../common'

const Login = ({ openSignInModal, visibleModal }) =>
  <Fragment>
    <WhiteButton 
      onClick={ () => openSignInModal() }
      text="Sign Up" />
    { visibleModal && <ModalWindow />}
  </Fragment>

Login.propTypes = { 
  openSignInModal: PropTypes.func
}

export default Login