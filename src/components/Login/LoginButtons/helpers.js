import { push } from 'react-router-redux'

export const goToRegistration = () => (dispatch) =>
  dispatch(push('/registration'))