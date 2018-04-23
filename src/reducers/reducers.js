import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux'

import loginModal from '../components/Login/reducer'

const reducers = combineReducers({
  loginModal,
  routerReducer,
  form: reduxFormReducer
})

export default reducers