import { handleActions } from 'redux-actions'
import { 
  openSignInModal, 
  closeSignInModal, 
  saveUserToken,
  cleanUserToken
} from './actions'

const initialState = {
  visibleModal: false,
  user_token: null
}

const login = handleActions({
  [openSignInModal]: state => ({ ...state, visibleModal: true }),
  [closeSignInModal]: state => ({ ...state, visibleModal: false }),
  [saveUserToken]: ( state, { payload }) => ({ ...state, user_token: payload }),
  [cleanUserToken]: state => ({ ...state, user_token: null})
}, initialState)

export default login