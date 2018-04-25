import { push } from 'react-router-redux'
import { closeSignInModal } from '../actions'

export const goToRegistration = () => dispatch => {
  dispatch(closeSignInModal())
  dispatch(push('/registration'))
}