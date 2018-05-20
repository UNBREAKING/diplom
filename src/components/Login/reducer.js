import { handleActions } from 'redux-actions'
import { 
  openSignInModal, 
  closeSignInModal, 
  saveUserToken,
  cleanUserToken,
  openForgotPasswordModal,
  closeForgotPasswordModal,
  saveUserLogin,
  openResetPasswordModal,
  closeResetPasswordModal,
  cleanUserLogin
} from './actions'

const initialState = {
  visibleModal: false,
  isForgotPassword: false,
  resetModalOpen: false,
  user_token: null,
  user_email: null
}

const login = handleActions({
  [openSignInModal]: state => ({ ...state, visibleModal: true }),
  [closeSignInModal]: state => ({ ...state, visibleModal: false }),
  [saveUserToken]: ( state, { payload }) => ({ ...state, user_token: payload }),
  [cleanUserToken]: state => ({ ...state, user_token: null}),
  [openForgotPasswordModal]: state => ({ ...state, isForgotPassword: true }),
  [closeForgotPasswordModal]: state => ({ ...state, isForgotPassword: false }),
  [saveUserLogin]: ( state, { payload }) => ({ ...state, user_email: payload }),
  [openResetPasswordModal]: state => ({ ...state, resetModalOpen: true }),
  [closeResetPasswordModal]: state => ({ ...state, resetModalOpen: false }),
  [cleanUserLogin]: state => ({ ...state, user_email: null }),
}, initialState)

export default login