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
