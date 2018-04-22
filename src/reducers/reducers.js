import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

import loginModal from '../components/Login/reducer'

const reducers = combineReducers({
  loginModal,
  form: reduxFormReducer
})

export default reducers