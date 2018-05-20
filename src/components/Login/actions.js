import { createAction } from 'redux-actions'
import Cookies from 'cookies-js'
import fetch from '../../services/fetch'
import { USER_TOKEN } from '../../constants/constants'

export const openSignInModal = createAction("MODAL/OPEN_SIGN_IN")
export const closeSignInModal = createAction("MODAL/CLOSE_SIGN_IN")

export const saveUserToken = createAction("LOGIN/SAVE_USER_TOKEN")

export const setUserToken = () => dispatch => 
  Cookies.get && dispatch(saveUserToken(Cookies.get(USER_TOKEN)))

export const cleanUserToken = createAction("LOGIN/CLEAN_USER_TOKEN")

export const signout = () => dispatch =>  
  fetch({ 
    url: 'http://localhost:3000/api/logout', 
    method: 'POST'
  })
  .then(result =>
    result.error ?
      alert(result.error) :
      dispatch(cleanUserToken())
  )
  .catch((err) => console.log(err))

export const signin = () => (dispatch, getState) => {
  const { 
    form: {
      login: {
        values = {}
      } = {}
    } = {}
  } = getState()
  
  fetch({ 
    url: 'http://localhost:3000/api/login', 
    method: 'POST',
    body: JSON.stringify(values)
  })
  .then(result => {
    if(result.error) {
      alert(result.error) 
    } else {
      dispatch(setUserToken())
      dispatch(closeSignInModal())
    }
    }
  )
  .catch((err) => console.log(err))
}

export const openForgotPasswordModal = createAction('LOGIN/OPEN_FORGOT_PASSWORD_MODAL')
export const closeForgotPasswordModal = createAction('LOGIN/CLOSE_FORGOT_PASSWORD_MODAL')

export const saveUserLogin = createAction('LOGIN/SAVE_USER_LOGIN')
export const cleanUserLogin = createAction('LOGIN/CLEAN_USER_LOGIN')

export const openResetPasswordModal = createAction('LOGIN/OPEN_RESET_PASSWORD_MODAL')
export const closeResetPasswordModal = createAction('LOGIN/CLOSE_RESET_PASSWORD_MODAL')

export const checkLogin = () => (dispatch, getState) => {
  const { 
    form: {
      forgotPassword: {
        values = {}
      } = {}
    } = {}
  } = getState()
  
  fetch({ 
    url: 'http://localhost:3000/api/forgotPassword', 
    method: 'POST',
    body: JSON.stringify(values)
  })
  .then(({ error, userEmail }) => {
    if(error) {
      alert(error) 
    } else {
      dispatch(closeForgotPasswordModal())
      dispatch(saveUserLogin(userEmail))
      dispatch(openResetPasswordModal())
    }
    }
  )
  .catch((err) => console.log(err))
}

export const resetPassword = () => (dispatch, getState) => {
  const {
    login: {
      user_email
    },
    form: {
      resetPassword: {
        values = {}
      } = {}
    } = {}
  } = getState()
  
  fetch({ 
    url: 'http://localhost:3000/api/restPassword', 
    method: 'POST',
    body: JSON.stringify({...values, email: user_email })
  })
  .then(({ error }) => {
    if(error) {
      alert(error) 
    } else {
      dispatch(closeResetPasswordModal())
      dispatch(cleanUserLogin())
      dispatch(openSignInModal())
    }
    }
  )
  .catch((err) => console.log(err))
}