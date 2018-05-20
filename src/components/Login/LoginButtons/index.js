import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { goToRegistration } from './helpers'
import { openForgotPasswordModal, closeSignInModal } from '../actions'
import LoginButtons from './LoginButtons'

export default compose(
  connect(null, { goToRegistration, openForgotPasswordModal, closeSignInModal }),
  withHandlers({
    openModal: ({ openForgotPasswordModal, closeSignInModal }) => () => {
      openForgotPasswordModal()
      closeSignInModal()
    }
  })
)(LoginButtons)