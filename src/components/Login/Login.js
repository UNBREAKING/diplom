import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { WhiteButton, ModalWindow } from '../common'

const Login = ({ openSignInModal, visibleModal, closeSignInModal }) =>
  <Fragment>
    <WhiteButton 
      onClick={ () => openSignInModal() }
      text="Sign In" />
    { visibleModal 
        && <ModalWindow 
              width="480" 
              header="Sign In"
              closeHandler={() => closeSignInModal()} />
    }
  </Fragment>

Login.propTypes = {
  closeSignInModal: PropTypes.func,
  openSignInModal: PropTypes.func,
  visibleModal: PropTypes.bool
}

export default Login