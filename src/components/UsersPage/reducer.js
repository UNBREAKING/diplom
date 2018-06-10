import { handleActions } from 'redux-actions'
import { 
  saveUsers,
 } from './actions'

const initialState = {
  users : []
}

const usersPage = handleActions({
  [saveUsers]: (state,{ payload }) => ({ ...state, users: payload }),
}, initialState)

export default usersPage