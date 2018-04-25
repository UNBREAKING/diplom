import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

import loginModal from '../components/Login/reducer'

const reducers = combineReducers({
  loginModal,
  form: reduxFormReducer,
  router: routerReducer
})

export default reducers