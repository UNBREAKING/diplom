import { handleActions } from 'redux-actions'
import { openSignInModal, closeSignInModal } from './actions'

const initialState = {
    visibleModal: false
}

const loginModal = handleActions({
   [openSignInModal]: state => ({ ...state, visibleModal: true}),
   [closeSignInModal]: state => ({ ...state, visibleModal: false})
}, initialState)

export default loginModal